# Find the median of two sorted arrays


def median(list1, list2):
    sum = 0
    for val in list1:
        sum += val
    for val in list2:
        sum += val
    return sum / (len(list1) + (len(list2)))


arr1 = [1, 3, 5]
arr2 = [2, 4, 6]

answer = median(arr1, arr2)

print(answer)
