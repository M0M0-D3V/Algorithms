# Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

# for example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

# -There is 1 smaller element to the right of 3
# -There is 1 smaller element to the right of 4
# -There are 2 smaller elements to the right of 9
# -There is 1 smaller element to the right of 6
# -There are no smaller elements to the right of 1


def smaller_counts(array):
    # loop through from left and for each i, nest loop to check for smaller
    # need variable for smaller count
    count = 0
    array_counts = []
    for i in range(len(array)):
        for j in range(i + 1, len(array)):
            if array[i] > array[j]:
                count += 1
        array_counts.append(count)
        count = 0
    return array_counts


yas = smaller_counts([3, 4, 9, 6, 1])

print(yas)
