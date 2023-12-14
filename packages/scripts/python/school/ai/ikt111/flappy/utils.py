import math
import random
from functools import lru_cache

colors = {
    'red': (255, 0, 0),
    'green': (0, 255, 0),
    'blue': (0, 0, 255),
    'black': (0, 0, 0),
    'gray': (100, 100, 100),
    'white': (255, 255, 255),
}

def generate_random_force(_min=-4, _max=4):
    """Generate a random force vector with x and y in the interval [_min, _max]

    Args:
        _min (int): Highest force in negative directions. Defaults to -4
        _max (int): Highest force in positive directions. Defaults to 4

    Returns:
        list: Force vector
    """ 
    return [random.randint(_min, _max),
            random.randint(_min, _max)]


def calculate_euclidian_distance(p, q):
    """Calculate the euclidian distance between two positions

    Arguments:
        p (list): First position
        q (list): Second position

    Returns:
        float: Euclidian distance between p and q
    """
    return math.sqrt(sum([(a - b) ** 2 for a, b in zip(p, q)]))


def get_angle_between_points(d_x, d_y):
    """Helper function to calculate an angle between two points"""
    return math.atan2(d_x, d_y) * 180 / math.pi

@lru_cache(maxsize=10)
def calculate_rel_points(scale=0.5):
    """Helper function to calculate realtive points"""
    # List of (angle,radius) pairs.
    rel_points = [[0, 20], [-140, 20], [180, 7.5], [140, 20]]
    for i in range(len(rel_points)):
        rel_points[i] = (math.radians(rel_points[i][0]), scale * rel_points[i][1])
    return rel_points
