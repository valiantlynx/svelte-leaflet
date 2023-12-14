from snake import SnakeGame
from a_star import AStarSnakeAI

snake = SnakeGame()

@snake.register_ai
def super_ai():
    ai = AStarSnakeAI(snake)
    moves = ai.get_moves()
    print(moves)
    return moves

snake.start(use_ai=True)
