# Merge Arrays
# Given 2 sorted Arrays, A and B, where A is long enough to hold the contents of A and B, write a function to copy the contents of B into A without using any buffer or additional memory


def merge_arrays(list_a, list_b):
    for i in range(len(list_b)):
        list_a[len(list_a)-1-i] = list_b[len(list_b)-1-i]
    return list_a


A = [1, 3, 5, 0, 0, 0, ]
B = [2, 4, 6]
this = merge_arrays(A, B)
print(this)
