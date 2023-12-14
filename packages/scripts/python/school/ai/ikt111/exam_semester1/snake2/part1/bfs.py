import random
from collections import deque
from snake import SnakeGame

class BfsSnakeAI:
    def __init__(self, snake: SnakeGame):
        self.snake = snake

    def find_path(self):
        start = tuple(self.snake.get_snake_head_position())
        goal = tuple(self.snake.get_apple_position())
        return self.bfs_search(start, goal)

    def bfs_search(self, start, goal):
        queue = deque([start])
        visited = set()
        came_from = {start: None}

        while queue:
            current = queue.popleft()
            visited.add(current)

            if current == goal:
                return self.reconstruct_path(came_from, start, goal)

            for direction in ['up', 'down', 'left', 'right']:
                next_position = tuple(self.snake.simulate_move(list(current), direction))
                if (next_position not in visited and 
                    self.snake.is_legal([direction]) and 
                    self.is_move_safe(next_position)):
                    queue.append(next_position)
                    came_from[next_position] = current

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

    def is_move_safe(self, position):
        x, y = position
        game_state = self.snake.game_state
        if x < 0 or y < 0 or x >= len(game_state[0]) or y >= len(game_state):
            return False  # Out of bounds
        return game_state[y][x] == 0  # Safe if the cell is empty (0)

    def get_moves(self):
        path = self.find_path()
        if path:
            return self.path_to_moves(path)
        return [random.choice(['up', 'down', 'left', 'right'])]
