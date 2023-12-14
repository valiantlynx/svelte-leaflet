from ids import *

goal_node = 'V'
path = find_path(mytree, goal_node)
if path:
    print("Path to goal:", ' -> '.join(path))
else:
    print("Goal not found")
