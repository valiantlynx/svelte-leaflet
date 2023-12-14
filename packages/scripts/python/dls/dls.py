def find_path(mytree, goal, max_depth=3):
    stack = [('A', 0, [])]  # Each element is (node, depth, path_to_node)

    while stack:
        node, depth, path = stack.pop()
        new_path = path + [node] 

        if node == goal:
            return new_path

        if depth < max_depth:
            for child in mytree.get(node, []):
                stack.append((child, depth + 1, new_path))

    return None

mytree = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H', 'I'],
    'E': ['J', 'K'],
    'F': ['L', 'M'],
    'G': ['N', 'O'],
    'H': [],
    'I': [],
    'J': [],
    'K': [],
    'L': [],
    'M': [],
    'N': [],
    'O': [],
    'P': []
}


