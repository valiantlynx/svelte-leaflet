import numpy as np
import random
import config


def pos_to_int(pos, sprite_size):
    """Helper function that converts position values to integer"""
    return (int(pos[0] / sprite_size), 
            int(pos[1] / sprite_size))


def rand_p(_max, sprite_size):
    """Helper function to generate a random position value""" 
    return int(round(random.randrange(0, _max - sprite_size) / sprite_size) * sprite_size)


def find_common_divisor(a, b, target, _min):
    """Finds the common divisor that is closest to the given target"""
    if target >= min(a, b):
        return None

    greatest = 1
    for i in range(2, min(a, b) + 1): 
        if i > target:
            break
        if (a % i == b % i == 0): 
            greatest = i
    if greatest < _min:
        return None
    return greatest