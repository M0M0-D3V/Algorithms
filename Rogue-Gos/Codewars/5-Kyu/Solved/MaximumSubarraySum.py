# The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

# maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
# // should be 6: [4, -1, 2, 1]
# Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

# Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


def max_sequence(arr):
    max_ending_here = max_so_far = 0
    for x in arr:
        print(f"value at x {x}")
        max_ending_here = max(x, max_ending_here + x)
        print(f"x is {x} and max ending here is: {max_ending_here}")
        max_so_far = max(max_so_far, max_ending_here)
        print(
            f"max so far is {max_so_far} and max ending here is {max_ending_here}")
    return max_so_far


print(max_sequence([-2, 1, 3, 4, -1, 2, 1, -5, 4]))
