import random
from snake import SnakeGame

snake = SnakeGame()

@snake.register_ai
def super_ai():
    snake_head = snake.get_snake_head_position()
    apple_position = snake.get_apple_position()

    moves = []
    if snake_head and apple_position:
        # Horizontal Movement
        if snake_head[0] < apple_position[0]:
            moves.append('right')
        elif snake_head[0] > apple_position[0]:
            moves.append('left')

        # Vertical Movement
        if snake_head[1] < apple_position[1]:
            moves.append('down')
        elif snake_head[1] > apple_position[1]:
            moves.append('up')

    # It is possible that the snake is already in the correct position. it improves the performance, but adds a bit of wrong moves sometimes
    if not moves:
        moves = random.choice([['up', 'down'], ['left', 'right']])
        
  
    for move in moves:
        if is_move_safe(snake.get_snake_head_position(), snake.game_state):
            return move
    # If no safe moves are available, pick a random one removing the move that is not safe
        return random.choice(['up', 'down', 'left', 'right'])
    
    return moves


def is_move_safe(position, game_state):
    x, y = position
    if x < 0 or y < 0 or x >= len(game_state[0]) or y >= len(game_state):
        return False  # Out of bounds
    return game_state[y][x] == 0  # Safe if the cell is empty (0)

snake.start(use_ai=True)