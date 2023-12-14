from a_star import *

graph = Graph()

# Nodes are stored as (name, position(x, y))
nodes = {
    'A': (0, 0), 'B': (1, 2), 'C': (2, 1), 'D': (3, 3), 'E': (4, 2),
    'F': (5, 3), 'G': (6, 1), 'H': (7, 2), 'I': (8, 0), 'J': (9, 1)
}

for name, pos in nodes.items():
    graph.add_node(Node(name, pos))

# Edges are stored as (node1, node2, cost)
edges = [
    ('A', 'B', 1.5), ('A', 'C', 2.0), ('B', 'C', 3.0), ('B', 'D', 2.0),
    ('C', 'E', 3.5), ('D', 'E', 1.0), ('D', 'F', 3.0), ('D', 'G', 2.5),
    ('E', 'G', 2.0), ('F', 'G', 0.5), ('F', 'H', 1.5), ('G', 'H', 2.0),
    ('G', 'I', 3.5), ('H', 'I', 2.0), ('H', 'J', 3.0), ('I', 'J', 1.5)
]

for node1, node2, cost in edges:
    graph.add_edge(graph.nodes[node1], graph.nodes[node2], cost)

# Example usage
path = graph.a_star_search('A', 'J')
print("Path to goal:", path if path else "No path found")