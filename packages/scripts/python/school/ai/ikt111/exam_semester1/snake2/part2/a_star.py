import heapq
import random
from snake import SnakeGame


class AStarSnakeAI:
    def __init__(self, snake: SnakeGame):
        self.snake = snake

    def find_path(self):
        start = tuple(self.snake.get_snake_head_position())
        goal = tuple(self.snake.get_apple_position())
        return self.a_star_search(start, goal)

    def a_star_search(self, start, goal):
        open_set = [(0, start)]
        came_from = {start: None}
        g_score = {start: 0}

        while open_set:
            _, current = heapq.heappop(open_set)

            if current == goal:
                return self.reconstruct_path(came_from, start, goal)

            for direction in ['up', 'down', 'left', 'right']:
                next_position = tuple(self.snake.simulate_move(list(current), direction))
                # i could have cost of 1 for each move, but i want to avoid the snake's body
                # so i add 1 to the cost for each move that is not legal
                
                cost = 1
                if not self.snake.is_legal([direction]): cost += 1
                
                # ! it's not working. i die mostly because of this
                # if the move is not safe, add 1 to the cost
                if not self.is_move_safe(next_position): cost += 1
                
                # if the move is winning, remove the cost
                if self.snake.is_winning([direction]): cost -= 1

                tentative_g_score = g_score[current] + cost

                if (tentative_g_score < g_score.get(next_position, float('inf')) and 
                    self.snake.is_legal([direction]) and self.is_move_safe(next_position)):
                    came_from[next_position] = current
                    g_score[next_position] = tentative_g_score
                    f_score = tentative_g_score + self.snake.get_distance(next_position, goal)
                    heapq.heappush(open_set, (f_score, next_position))

        return []

    def reconstruct_path(self, came_from, start, goal):
        current = goal
        path = []
        while current != start:
            path.append(current)
            current = came_from[current]
        path.append(start)
        path.reverse()
        return path

    def path_to_moves(self, path):
        moves = []
        for i in range(1, len(path)):
            current, next = path[i - 1], path[i]
            if next[0] > current[0]: moves.append('right')
            elif next[0] < current[0]: moves.append('left')
            elif next[1] > current[1]: moves.append('down')
            elif next[1] < current[1]: moves.append('up')
        return moves

    ## tried to detect the walls, but it didn't work
    def is_move_safe(self, position):
        x, y = position
        game_state = self.snake.game_state
        if x < 0 or y < 0 or x >= len(game_state[0]) or y >= len(game_state):
            return False  # Out of bounds
        return game_state[y][x] == 0  # Safe if the cell is empty (0)

    def manhattan_distance(self, p1, p2):
        return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])

    def get_moves(self):
        path = self.find_path()
        if path:
            return self.path_to_moves(path)
        return [random.choice(['up', 'down', 'left', 'right'])]
