class Node:
    def __init__(self, value, left = None, right= None):
        self.value = value
        self.left = left
        self.right = right
    def __str__(self):
        return "Node(" + str(self.value) + ")"
        
def iterative_walk(tree: Node):
    queue = [tree]
    while len(queue) > 0:
        node = queue.pop(-1)
        if node is not None:
            print(node)
            queue.insert(0, node.left)
            queue.insert(0, node.right)
            
            
        
mytree = Node('A',Node('B', Node('D'), Node('E')),  Node('C', Node('F'), Node('G')))