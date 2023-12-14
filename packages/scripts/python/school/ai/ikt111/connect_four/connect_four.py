from copy import deepcopy
import os
import numpy as np
import time
import random
import pygame
pygame.init()

import config

CLOCK_SPEED = 10
WIDTH  = 589
HEIGHT = 540
PIECE_SIZE = 63 # Hardcoded to fit with background
ROWS = 6
COLS = 7

colors = {
    'black': (0, 0, 0),
    'white': (255, 255, 255),
    'blue':  (0, 0, 255)
}

score_table = { 
    config.PLAYER1: {
        (config.BOARD, config.BOARD, config.BOARD, config.PLAYER1): 	1/4,
        (config.BOARD, config.BOARD, config.PLAYER1, config.PLAYER1): 	2/4,
        (config.BOARD, config.PLAYER1, config.PLAYER1, config.PLAYER1): 3/4,
    }, 
    config.PLAYER2: {
        (config.BOARD, config.BOARD, config.BOARD, config.PLAYER2): 	1/4,
        (config.BOARD, config.BOARD, config.PLAYER2, config.PLAYER2): 	2/4,
        (config.BOARD, config.PLAYER2, config.PLAYER2, config.PLAYER2): 3/4,
    }
}

difficulty = {'easy': 3, 'medium': 5, 'hard': 7}

gfx_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'gfx')


class Node:
    def __init__(self, move, parent=None):
        self.move = move
        self.parent = parent
        self.score = 0
        if not parent:
            self.depth = 1
            self.is_opponent = False
        else:
            self.depth = parent.depth + 1
            self.is_opponent = not parent.is_opponent

    def move_list(self):
        moves = []
        node = self
        while node:
            moves.append((node.move, 1 if node.is_opponent else 2))
            node = node.parent
        moves.reverse()
        return moves

    def root_move(self):
        node = self
        while node.parent:
            node = node.parent
        return node.move


class Highlighter(pygame.sprite.Sprite):
    base_x = 12.5
    base_y = 55
    d_x = 81.3
    image = pygame.image.load(os.path.join(gfx_dir, 'highlight.png'))
    def __init__(self, column):
        pygame.sprite.Sprite.__init__(self)
        self.rect = self.image.get_rect()
        self.rect.left, self.rect.top = [self.base_x + (self.d_x * column), self.base_y]

class Background(pygame.sprite.Sprite):
    image = pygame.image.load(os.path.join(gfx_dir, 'background.png'))
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.rect = self.image.get_rect()
        self.rect.left, self.rect.top = [0, 0]

class BasePiece(pygame.sprite.Sprite):
    base_x = 53
    base_y = 94
    d_x = 81
    d_y = 80.8

    def calc_position(self, col, row):
        x = self.base_x + (self.d_x * col)
        y = self.base_y + (self.d_y * row)
        return [x, y]


class RedPiece(BasePiece):
    image = pygame.image.load(os.path.join(gfx_dir, 'red_piece.png'))
    def __init__(self, col, row):
        pygame.sprite.Sprite.__init__(self)
        self.rect = self.image.get_rect()
        self.rect.center = self.calc_position(col, row)


class YellowPiece(BasePiece):
    image = pygame.image.load(os.path.join(gfx_dir, 'yellow_piece.png'))
    def __init__(self, col, row):
        pygame.sprite.Sprite.__init__(self)
        self.rect = self.image.get_rect()
        self.rect.center = self.calc_position(col, row)

class TestPiece(BasePiece):
    image =  pygame.image.load(os.path.join(gfx_dir, 'red_piece.png'))
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.rect = self.image.get_rect()
        self.rect.center = (53, 94)


class ConnectFour():
    def __init__(self):
        self.font_style = pygame.font.SysFont(None, 80)
        self.width   = WIDTH
        self.height  = HEIGHT
        self.display = pygame.display.set_mode((self.width, self.height))
        pygame.display.set_caption('Connect Four')
        self.clock = pygame.time.Clock()

        self.background = Background()
        self.highlighter = None

        self.piece_size = PIECE_SIZE
        self.game_pieces = []
        self.board_piece = 0
        self.player1 = 1
        self.player2 = 2
        self.game_state = [[self.board_piece for _ in range(ROWS)] for _ in range(COLS)]

        self.max_depth = difficulty.get(config.DIFFICULTY, 'easy')
        self.ai = lambda placeholder: self._game_over(msg='No AI registered!')


    def register_ai(self, f):
        """Decorator for registering 'external' AI"""
        self.ai = f


    def _display_message(self, msg, color=colors['black']):
        """Helper function to show message on display"""
        message = self.font_style.render(msg, True, color)
        message_rect = message.get_rect(center=(self.width / 2, self.height / 2))

        self.display.blit(message, message_rect)
        pygame.display.update()
        time.sleep(1)


    def _update_display(self):
        """Helper function to update pygame display"""
        self.display.fill(colors['white'])
        self.display.blit(self.background.image, 
                          self.background.rect)

        if self.highlighter:
            self.display.blit(self.highlighter.image,
                            self.highlighter.rect)

        for piece in self.game_pieces:
            self.display.blit(piece.image, piece.rect)
        pygame.display.update()


    def _exit(self):
        """Helper function to exit the game"""
        pygame.quit()
        quit()


    def _check_quit_event(self, event):
        """Helper function to check for "user want's to quit" conditions"""
        if event.type == pygame.QUIT:
            self._game_over(msg='Quitting...')
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_q:
                self._game_over(msg='Quitting...')


    def _check_highlighter_event(self, pos):
        """Helper function to draw column highligher when hover over"""
        col = self._pos_to_col(pos)
        if col == -1:
            self.highlighter = None
        else:
            self.highlighter = Highlighter(col)    


    def _pos_to_col(self, pos):
        """Helper function to convert a position into its corresponding column"""
        x = pos[0]
        base = Highlighter.base_x
        d_x = Highlighter.d_x

        if x < base:
            return -1
        for i in range(1, 8):
            if x < (base + (d_x * i)):
                return i - 1
        return -1


    def _get_next_row(self, col, state=None):
        """Helper function to get the next free row in a given column and state"""
        if not state:
            state = self.game_state
        return next((i - 1 for i, r in enumerate(state[col]) 
                     if r != self.board_piece), # Condition
                     ROWS - 1) # Default return value


    def _put_piece(self, player, col, row, state=None):
        """Helper function to insert player pieces on the board"""
        if not state:
            state = self.game_state
        
        if player == self.player1:
            piece = RedPiece(col, row)
        elif player == self.player2:
            piece = YellowPiece(col, row)
        else:
            raise Exception(f'Unknown player \'{player}\'')

        state[col][row] = player
        
        if state is self.game_state:
            self.game_pieces.append(piece)

    def _valid_cols(self, state=None):
        """Helper function to find valid cols with open rows given a state"""
        if not state:
            state = self.game_state
        for col in range(COLS):
            row = self._get_next_row(col, state=state)
            if row > -1:
                yield col


    def _get_score(self, player, window):
        """Helper function to get the score for a given player and window"""
        if isinstance(window, list):
            window = tuple(window)
        return score_table[player].get(window, 0)


    def _make_move(self):
        """Game AI"""
        def generate_children(parent_node, current_state):
            children = []
            for col in self._valid_cols(state=current_state):
                child = Node(col, parent=parent_node)
                child_state = self.simulate_moves(child.move_list())
                for window in self._generate_windows(state=child_state):
                    ## Check if child wins - break if
                    winner = self._check_winning_window(window)
                    if winner and winner == self.player1:
                        parent_node.score = -1
                        return None
                    elif winner and winner == self.player2:
                        raise Exception('Player won on game move - should not happen. Please report bug')
                    
                    ## Calculate child score
                    child.score = max(child.score, score_table[self.player1].get(tuple(window), 0))
            
                children.append(child)
            return max(children, key=lambda x: x.score)

        open_list = []
        # Populate open_list with root nodes
        for col in self._valid_cols():
            open_list.append(Node(col))

        best_node = open_list[0]
        while open_list:
            node = open_list.pop(0)
            moves = node.move_list()
            new_state = self.simulate_moves(moves)
            
            if node.is_opponent:
                for col in self._valid_cols(state=new_state):
                    open_list.append(Node(col, parent=node))
            else:
                for window in self._generate_windows(state=new_state):
                    winner = self._check_winning_window(window)
                    if winner and winner == self.player2:
                        # We assume any prev. opponent move is their best
                        return node.root_move()
                    elif winner and winner == self.player1:
                        raise Exception('Player won on game move - should not happen. Please report bug')
                    
                    node.score = max(node.score, score_table[self.player2].get(tuple(window), 0))
                        
                # Create opponent children
                if node.depth < self.max_depth:
                    child = generate_children(node, new_state)
                
                    if child:
                        open_list.append(child)
                if node.score > best_node.score:
                    best_node = node

        return best_node.root_move()


    def _check_if_col_is_full(self, col):
        """Helper function to check if a column is full"""
        return self.board_piece in col

    def _check_winning_window(self, window):
        window = set(window)
        if self.board_piece not in window and len(window) == 1:
            return window.pop()
        return None

    def _generate_horizontal_windows(self, state=None):
        """Helper function that will yield all possible horizontal windows in a given state"""
        if not state:
            state = self.game_state
        for row in range(ROWS):
            for col in range(COLS - 3):
                window = []
                for i in range(col, col + 4):
                    window.append(state[i][row])
                yield window

    def _generate_vertical_windows(self, state=None):
        """Helper function that will yield all possible vertical windows in a given state"""
        if not state:
            state = self.game_state
        for col in range(COLS):
            for i in range(ROWS - 3):
                window = state[col][i:i + 4]
                yield window
    
    def _generate_diagonal_windows(self, state=None):
        """Helper function that will yield all possible diagonal windows in a given state"""
        if not state:
            state = self.game_state
        for col in range(COLS):
            for row in range(ROWS):
                if col + 3 < COLS and row < ROWS - 3:
                    window = [state[col + i][row + i] for i in range(4)]
                    yield window
                elif row >= 3 and col < COLS - 3:
                    window = [state[col + i][row - i] for i in range(4)]
                    yield window
                else:
                    continue


    def _generate_windows(self, state=None):
        """Helper function that wraps the different 'generate windows' functions"""
        if not state:
            state = self.game_state
        for window in self._generate_horizontal_windows(state):
            yield window
        for window in self._generate_vertical_windows(state):
            yield window
        for window in self._generate_diagonal_windows(state):
            yield window
        
    
    def _check_if_board_is_full(self, state=None):
        """Helper function to check if the board is full"""
        if not state:
            state = self.game_state
        for col in state:
            if 0 in col:
                return False
        return True

    def _check_if_winner(self):
        """Helper function for the game to know if there is a winner"""
        for window in self._generate_windows():
            winner = self._check_winning_window(window)
            if winner:
                if winner == self.player1:
                    self._game_won()
                elif winner == self.player2:
                    self._game_over()
                else:
                    raise Exception(f'Unknown winner \'{winner}\'')
        if self._check_if_board_is_full():
            self._game_over('Draw!')

    def _game_over(self, msg='You Lost'):
        """Helper function to display a loss-condition message"""
        self._display_message(msg)
        self._exit()


    def _game_won(self, msg='You Won!'):
        """Helper function to display a win-condition message"""
        self._display_message(msg)
        self._exit()


    def simulate_moves(self, moves):
        """Simulates a sequence of moves.

        This functions accepts a single move, or a list of moves.
        Each move is assumed to be a tupple like this: (col, player)

        Returns:
            A copy of the resulting game state if all moves are legal
            False if any move is illegal
        """
        new_state = deepcopy(self.game_state)
        for col, player in moves:
            row = self._get_next_row(col, state=new_state)
            if row == -1:
                return False
            self._put_piece(player, col, row, new_state)
        return new_state
    

    def get_all_valid_cols(self, state=None):
        """This function will return all valid columns given a state.

        If a state is not given, the function will use the current state of the game.

        Args:
            state: A copy of the game state

        Returns:
            list: A list of all available columns
        """
        return [col for col in self._valid_cols(state=state)]


    def is_winner(self, player, state):
        """Checks if a given player wins the game in a given game state

        Args:
            player: The player to check win condition for
            state: A copy of the game state

        Returns:
            bool: True if the player wins, else False
        """
        for window in self._generate_windows(state=state):
            winner = self._check_winning_window(window)
            if winner == player:
                return True
        return False


    def get_heuristic(self, state):
        """Calculate a heuristic given a state

        Args:
            state: Copy of a game state

        Returns:
            float: Heuristic of the given state
        """
        player_1_max = max([self._get_score(self.player1, window)
                            for window in self._generate_windows(state=state)])

        player_2_max = max([self._get_score(self.player2, window)
                            for window in self._generate_windows(state=state)])

        h = player_1_max - player_2_max
        return h


    def start(self, use_ai=False):
        self._update_display()
        # Game Loop
        while True:
            move = None
            while move is None:
                self.clock.tick(CLOCK_SPEED)
                for event in pygame.event.get():
                    self._check_quit_event(event)

                    if not use_ai:
                        if event.type == pygame.MOUSEMOTION:
                            self._check_highlighter_event(pygame.mouse.get_pos())
                            self._update_display()

                        if event.type == pygame.MOUSEBUTTONUP:
                            move = self._pos_to_col(pygame.mouse.get_pos())
                            if move == -1:
                                move = None
                                continue
                if use_ai:
                    # Get next move from their AI
                    move = self.ai()
                    if move < 0 or move > COLS:
                        print(f'Invalid move: {move}')
                        move = None

            row = self._get_next_row(move)
            if row > -1:
                self._put_piece(self.player1, move, row)
        
            self._update_display()
            self._check_if_winner()
            
            # Game AI moves after player
            move = self._make_move()
            row = self._get_next_row(move)
            if row > -1:
                self._put_piece(self.player2, move, row)

            self._update_display()
            self._check_if_winner()

            # None of the above! Let's continue!
            self.clock.tick(CLOCK_SPEED)
    