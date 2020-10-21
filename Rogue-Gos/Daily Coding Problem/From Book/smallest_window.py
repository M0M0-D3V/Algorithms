# Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted.
# For example:
# given [3, 7, 5, 6, 9] , you should return (1, 3)


def smallest_window(arr_ints):
    # I think a way to approach is to check from both ends, start and finish, if going inwards, they are increasing from the start, and also decreasing from the end
    # maybe a loop that starts at the beginning and increments to check if the number is greater than previous and also less than the number from the back end that it is currently iterating on
    # I will use 2 variables to keep track of the positionings of where the left and right bounds of the window are indexed

    left = 0
    right = len(arr_ints - 1)
    while arr_ints[left] < arr_ints[right] and left < right:
        if arr_ints:
    print(arr_ints[-1 - i])

    return left, right


smallest_window([4, 5, 7, 9, 12, 42])

# method 1 from book


def window(array):
    left, right = None, None
    s = sorted(array)

    for i in range(len(array)):
        if array[i] != s[i] and left is None:
            left = i
        elif array[i] != s[i]:
            right = i
    return left, right

# method 2 from book that is more efficient


def window(array):
    left, right = None, None
    n = len(array)
    max_seen, min_seen = -float("inf"), float("inf")

    for i in range(n):
        max_seen = max(max_seen, array[i])
        if array[i] < max_seen:
            right = i

    for i in range(n - 1, -1, -1):
        min_seen = min(min_seen, array[i])
        if array[i] > min_seen:
            left = i
    return left, right
