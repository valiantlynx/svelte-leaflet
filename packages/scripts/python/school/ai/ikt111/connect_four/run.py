from connect_four import ConnectFour

game = ConnectFour()

@game.register_ai
def super_ai():
    import random
    import time
    time.sleep(0.5)
    return random.randint(0, 6)

game.start(use_ai=True)