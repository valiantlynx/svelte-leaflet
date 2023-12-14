# Project Title

A small implementation of 🐍 that can either be played by a human, or by an AI!  
Developed as a supplement for IKT111, University of Agder.

## Getting Started
### Prerequisites

Developed and tested using Python3.7.5  
Package requirements are given in `requirements.txt`

---

### Installation

Download and install Python3.7.x >=

Open the Snake folder that you downloaded in Visual Studio Code and do the following in the Visual Studio Code terminal:

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
from snake import SnakeGame

snake = SnakeGame()
snake.start(use_ai=False)
```
Movement: _Arrow keys_  
Quit game: _Q / q_

---

### Snake AI
The game allows you to register a custom function to control the snake.
See example below on how to register an AI-function. 

The game expects the AI-function to return a list of moves, where each move _has_ to be one of the following: `'up', 'down', 'left', 'right'`

Example code:
```python
from snake import SnakeGame

snake = SnakeGame()

@snake.register_ai # Decorator that tells the game to use your function
def super_ai():
    #
    # Some magic AI stuff here
    #

    return ['left', ..., 'down'] # Obligatory list of moves

snake.start(use_ai=True)
```

### "Public" and "Private" functions
`snake.py` contains many functions. The majority of them are there to make the game work, and all start their name with an **underscore**, ie. `def _update_display(self)`.
Though some of these "core game functions" are accessible for everyone to use, they are not meant to be used as part of solutions for assigments.  

There are some functions that does _not_ start with an **underscore**, ie. `def get_snake_head_position(self)`. These are there to offer help / functionality that can be used to interract with the game ( and is also allowed for use in assignment solutions ). Below is a list of all available, public functions:

>`is_legal(moves)`  
Check if a sequence of moves is legal  

>`is_winning(moves)`  
Check if a sequence of moves leads to the apple  
This function does _not_ validate if the given moves are legal.

>`simulate_move(position, move)`  
Simulates a move from the given position and returns the new position.  
This function does _not_ validate if the given move is legal.

>`get_snake_head_position()`  
Returns current posistion of snake head ( in game state coordinates )  

>`get_apple_position()`  
Returns current posistion of apple ( in game state coordinates )  

>`get_distance(p, q)`  
Returns the Manhattan Distance between two points `p` and `q`

### Game state
The game maintains a representation of the current game state in the form of an $`N\times M`$ matrix where the different game elements are represented by the following values:  

`Background = 0`  
`Snake body = 1`  
`Snake head = 2`  
`Apple = 3`

The game state is stored in a variable called `game_state` and can be accessed through the snake object.

Example:
```python
>>> game_state = snake.game_state
>>> print(game_state)
[[0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0],
 [0, 1, 1, 2, 0, 3],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0]]
```

---


## Reporting Bugs
If you encounter any bugs please raise an issue for it, or let me know either by email or in class :) 
