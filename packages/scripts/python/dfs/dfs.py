from typing import List

class Node:
    def __init__(self, value, left = None, right= None):
        self.value = value
        self.left = left
        self.right = right
    def __str__(self):
        return "Node(" + str(self.value) + ")"
    

# in python limited to a stack size of 1000 items
# everytime a function is called it is pushed onto the call stack and everytime it returns it is poped off
def recursive_walk(tree: Node):
    if tree is not None:
        # pre-order treversal
        print(tree)
        recursive_walk(tree.left)
        recursive_walk(tree.right)
        
        # # in-order treversal
        # recursive_walk(tree.left)
        # print(tree)
        # recursive_walk(tree.right)
        
        # # post-oder treversal
        # recursive_walk(tree.left)
        # recursive_walk(tree.right)
        # print(tree)
        
def iterative_walk(tree: Node):
    stack = [tree]
    while len(stack) > 0:
        node = stack.pop()
        if node is not None:
            print(node)
            stack.append(node.right)
            stack.append(node.left)
        
mytree = Node('A',Node('B', Node('D'), Node('E')),  Node('C', Node('F'), Node('G')))