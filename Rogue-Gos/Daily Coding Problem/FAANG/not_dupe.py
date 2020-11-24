# This problem was asked by Google.

# Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

# For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

# Do this in O(N) time and O(1) space.


def non_dupe(array):
    hash = {}
    for num in array:
        if num in hash:
            hash[num] += 1
        else:
            hash[num] = 1

    for num in hash:
        if hash[num] == 1:
            return num
    return hash


bwa = non_dupe([13, 19, 13, 13])
print(bwa)
