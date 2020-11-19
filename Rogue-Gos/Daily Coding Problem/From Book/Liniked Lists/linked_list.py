class Node:
    def __init__(self, data, next=None, prev=None):
        self.data = data
        # Single Link going forward
        self.next = next
        # Double link
        self.prev = prev

    def reverse(node):
        #  _reverse() reverses and returns both head and tail.
        # aConventionally, an underscore denotes an unused variable.
        head, _ = _reverse(node)
        return head

    def _reverse(node):
        if node is None:
            return None, None
        if node.next is None:
            return node, node

    # Reverse rest of linked list and move node to after tail.
        head, tail = _reverse(node.next)
        node.next = None
        tail.next = node
        return head, node

    def reverse(head):
        prev, current = None, head
        while current is not None:
            # Make current node point to prev and move both forward one
            tmp = current.next
            current.next = prev
            prev = current
            current = tmp
        return prev
