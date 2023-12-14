from collections import deque

def dfs(maze, start, end, visited, path, path_history):
    stack = deque()
    stack.append(start)

    while stack:
        current = stack.pop()
        if current == end:
            break
        visited.add(current)
        
        for neighbor in get_neighbors(maze, current):
            if neighbor not in visited:
                stack.append(neighbor)
                path.append(neighbor)
                path_history.append(list(path))  # Store the path history


def get_neighbors(maze, current):
    neighbors = []
    right = (current[0], current[1] + 1)
    down = (current[0] + 1, current[1])
    left = (current[0], current[1] - 1)
    up = (current[0] - 1, current[1])
    
    directions = [right, down, left, up]
    
    for neighbor in directions:
        if (0 <= neighbor[0] < len(maze) and 0 <= neighbor[1] < len(maze[0])):
            if maze[neighbor[0]][neighbor[1]] != 1:
                if maze[neighbor[0]][neighbor[1]] == 0 or maze[neighbor[0]][neighbor[1]] == 3:
                    neighbors.append(neighbor)
    return neighbors