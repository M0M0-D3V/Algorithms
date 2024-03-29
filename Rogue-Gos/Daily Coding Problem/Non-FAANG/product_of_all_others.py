import math
# This problem was asked by Uber.

# Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

# For example, if our input was[1, 2, 3, 4, 5], the expected output would be[120, 60, 40, 30, 24]. If our input was[3, 2, 1], the expected output would be[2, 3, 6].

# Follow-up: what if you can't use division?


def product_all_others(arr_ints):
    new_array = []
    for num in range(len(arr_ints)):
        new_array.append(int(math.prod(arr_ints) / arr_ints[num]))
    return new_array


yes = product_all_others([1, 2, 3, 4, 5])
print(yes)

yarp = product_all_others([3, 2, 1])
print(yarp)


def product_all_others(nums):
    # generate prefix products
    prefix_products = []
    for num in nums:
        if prefix_products:
            prefix_products(prefix_products[-1] * num)
        else:
            prefix_products.append(num)

    # Generate suffix products
    suffix_products = []
    for num in reversed(nums):
        if suffix_products:
            suffix_products.append(suffix_products[-1] * num)
        else:
            suffix_products(num)
    suffix_products = list(reversed(suffix_products))

    # Generate result from the product of prefixes and suffixes
    result = []
    for i in range(len(nums)):
        if i == 0:
            result.append(suffix_products[i + 1])
        elif i == len(nums) - 1:
            result.append(prefix_products[i - 1])
        else:
            result.append(prefix_product[i - 1] * suffix_products[i + 1])
    return result
