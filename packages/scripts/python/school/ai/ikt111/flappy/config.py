from math import sqrt

# --------------------- #
# SHOULD NOT BE CHANGED #
# --------------------- #

WIDTH = 800
HEIGHT = 600
STATS_HEIGHT = 150
CLOCK_SPEED = 60

START_POS = [100, HEIGHT - 100]
START_ANGLE = 135
START_VELOCITY = [0, 0]

MAX_DIST = sqrt((WIDTH ** 2) + (HEIGHT ** 2)) # Used to calc. default fitness


#----------------#
# CAN BE CHANGED #
# ---------------#

# This determines both the bird lifespan 
# and how many genes they have
MAX_LIFE = 1000

# This sets the maximum population size
MAX_POPULATION = 100
