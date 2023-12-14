import heapq
import math

class Node:
    def __init__(self, name, position):
        self.name = name
        self.position = position

    def euclidean_distance(self, other):
        return math.sqrt((self.position[0] - other.position[0]) ** 2 + (self.position[1] - other.position[1]) ** 2)

    def manhattan_distance(self, other):
        return abs(self.position[0] - other.position[0]) + abs(self.position[1] - other.position[1])

class Graph:
    def __init__(self):
        self.nodes = {}
        self.edges = {}

    def add_node(self, node):
        self.nodes[node.name] = node
        self.edges[node.name] = []

    def add_edge(self, node1, node2, cost):
        # Store neighbor along with the cost of the edge
        self.edges[node1.name].append((node2.name, cost))

    def a_star_search(self, start, goal, heuristic_type="euclidean"):
        def heuristic(node_name):
            if heuristic_type == "euclidean":
                return self.nodes[node_name].euclidean_distance(self.nodes[goal])
            else:
                return self.nodes[node_name].manhattan_distance(self.nodes[goal])

        open_set = [(0, start)]
        came_from = {}
        g_score = {node: float('inf') for node in self.nodes}
        g_score[start] = 0

        while open_set:
            _, current_name = heapq.heappop(open_set)

            if current_name == goal:
                path = []
                while current_name:
                    path.append(current_name)
                    current_name = came_from.get(current_name)
                return path[::-1]

            for neighbor_name, edge_cost in self.edges[current_name]:
                tentative_g_score = g_score[current_name] + edge_cost
                if tentative_g_score < g_score[neighbor_name]:
                    came_from[neighbor_name] = current_name
                    g_score[neighbor_name] = tentative_g_score
                    f_score = tentative_g_score + heuristic(neighbor_name)
                    heapq.heappush(open_set, (f_score, neighbor_name))

        return None


