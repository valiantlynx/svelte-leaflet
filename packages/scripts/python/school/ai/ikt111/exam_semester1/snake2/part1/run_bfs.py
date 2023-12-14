from snake import SnakeGame
from bfs import BfsSnakeAI

if __name__ == "__main__":
    snake = SnakeGame()

    @snake.register_ai
    def super_ai():
        bfs_ai = BfsSnakeAI(snake)
        return bfs_ai.get_moves()

    snake.start(use_ai=True)
