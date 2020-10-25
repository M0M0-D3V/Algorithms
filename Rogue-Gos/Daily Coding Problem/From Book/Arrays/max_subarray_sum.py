# Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

# For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

# Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would choose not to take any elements.
# Do this in O(n) time.

# Follow-up: What if the elemnts can wrap around? For example, given [8, -1, 3, 4], return 15, as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.


def max_subarray_sum(array):
    # create hash table to store sum of each sliced array
    hash = {}
    # I would loop through and feed dynamically into a slicing method that takes in and grows with i and length.
    # it would be a nested loop to keep increasing in length
    # sort through hash to find the max value
    # return max

    return max


# from the book, brute force method O(n)^3
def max_subarray_sum(arr):
    current_max = 0
    for i in range(len(arr) - 1):
        for j in range(i, len(arr)):
            current_max = max(current_max, sum(arr[i:j]))
    return current_max

# solution 2: Kadane's algorithm O(n) and O(1) space


def max_subarray_sum(arr):
    max_ending_here = max_so_far = 0
    for x in arr:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
