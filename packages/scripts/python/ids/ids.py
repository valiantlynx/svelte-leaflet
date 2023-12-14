def find_path(mytree, goal, initial_depth=0):
    max_depth = initial_depth
    while True: 
        stack = [('A', 0, [])]  # Reset the stack for each iteration with the root node
        while stack:
            node, depth, path = stack.pop()
            new_path = path + [node]

            if node == goal:
                return new_path
            if depth < max_depth:
                for child in mytree.get(node, []):
                    stack.append((child, depth + 1, new_path))

        max_depth += 1 
        if max_depth > len(mytree):  # Stop if we've exceeded the number of levels in the tree
            break

    return None

mytree = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H', 'I'],
    'E': ['J', 'K'],
    'F': ['L', 'M'],
    'G': ['N', 'O'],
    'H': ['P', 'Q'],
    'P': ['Q', 'R'],
    'Q': ['S', 'T'],
    'R': ['U', 'V'],
    'S': [],
    'T': [],
    'U': [],
    'V': []    
}


