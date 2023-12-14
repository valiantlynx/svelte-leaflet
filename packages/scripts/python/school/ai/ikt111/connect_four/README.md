# Project Title

A small implementation of Connect Four that can either be played by a human, or by an AI!  
Developed as a supplement for IKT111, University of Agder.

## Getting Started
### Prerequisites

Developed and tested using Python3.7.5  
Package requirements are given in `requirements.txt`

---

### Installation

Download and install Python3.7.x >=

Open the `connect_four` folder that you downloaded in Visual Studio Code and do the following in the Visual Studio Code terminal:

**Windows**
Install requirements
```powershell
py -m pip install -U -r requirements.txt --user
```

**Mac / Linux**
Create and activate a virtual environment

```bash
$ python3.7 -m venv venv
$ source venv/bin/activate
```

Install requirements

```bash
$ pip install -r requirements.txt
```

**Run Example**  
Start and play the game yourself

```python
from connect_four import ConnectFour

game = ConnectFour()
game.start(use_ai=False)
```
Select column: _Mouse click_  
Quit game: _Q / q_

---

### Connect Four AI
The game allows you to register a custom function to play against the game.
See example below on how to register an AI-function. 

The game expects the AI-function to return a zero-indexed column number as an integer. Since the game has 7 columns, the possible moves are therefore: `0`, `1`, `2`, `3`, `4`, `5` and, `6`.

Example code:
```python
from connect_four import ConnectFour

game = ConnectFour()

@game.register_ai # Decorator that tells the game to use your function
def super_ai():
    #
    # Some magic AI stuff here
    #

    return 0

gmae.start(use_ai=True)
```

### "Public" and "Private" functions
`ConnectFour` contains many functions. The majority of them are there to make the game work. The name of these "core game functions" all begin with an **underscore**, ie. `def _update_display(self)`.
Though these functions are accessible for everyone to use, they are not meant to be used as part of solutions for assigments.  

There are however some functions that do _not_ start with an **underscore**, ie. `def simulate_moves(self, moves)`. They are there to offer help / functionality that can be used to interract with the game ( and is also allowed for use in assignment solutions ). Below is a list of all available, public functions:

>`simulate_moves(moves)`  
Simulates a sequence of moves and returns a copy of the resulting game state as a 2D list.  
_NB!_ `moves` _has to be a list of tuples where the first element is the column number ( move ), and the second element is either_ `game.player1` _( You ) or_ `game.player2` _( The game ). The list should alternate between players_  
_Example: `moves = [(0, game.player1), (1, game.player2), (1, game.player1)]`_

>`get_all_valid_cols(state=None)`  
Returns all valid columns in a given game state. You can choose to not provide a game state to the function, in which case the current game state of the game will be used.

>`is_winner(player, state)`  
Check if a given player has a win condition in a given game state.

>`get_heuristic(state)`  
Calculates and returns a heuristic for a given game state

### "Public" variables
`ConnectFour` also contain some public variables you can use in your code, but be careful not to change them!

> `player1`  
Contains an integer that represents you, or your AI.

> `player2`  
Contains an integer that represents the built-in player.

> `board_piece`  
Contains an integer that represents all empty places on in the game state.

> `game_state`  
This is a representation of the current state of the game.  
The variable is updated automatically after each move in the game

### Game state
The game maintains a representation of the current game state in the form of an $`N\times M`$ matrix where the different game elements are represented by the following values:  

`Board = 0`  
`Player1 = 1`  
`Player2 = 2`

The game state is stored in a variable called `game_state` and can be accessed through the game object.

NB! The game stores the state in a way that if printed it looks like it's turned on it's side. To access elements first provide `column` and then `row`, like this: `game.game_state[col][row]` where `col` and `row` are both integers.

Example game state:
```python
>>> game_state = game.game_state
>>> print(game_state)
[[0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 2, 2],
 [0, 0, 0, 0, 0, 2],
 [0, 0, 0, 1, 1, 1]]
```

---


## Reporting Bugs
If you encounter any bugs please raise an issue for it, or let me know either by email or in class :) 
