# Given an array of integers where each value 1 <= x <= len(array), write a function that finds all duplicates in the array

# eg:
# dups([1, 2, 3]) = []
# dups([1, 2, 2]) = [2]
# dups([3, 3, 3]) = [3]
# dups([2, 1, 2, 1]) = [1, 2]


def find_duplicates(array):
    hash = {}
    duplicates = []
    for item in array:
        if item in hash:
            hash[item] += 1
            if item not in duplicates:
                duplicates.append(item)
        else:
            hash[item] = 1

    return duplicates


print(find_duplicates([2, 1, 2, 1]))
