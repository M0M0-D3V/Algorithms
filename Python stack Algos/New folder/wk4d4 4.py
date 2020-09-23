
# Recursive Binary Search

# Input: SORTED list of ints
# Output: bool representing if value is found

# Recursively search to find if the value exists, do not loop over every element.

# Examples:

# Input: [1,3,5,6], 4
# Output: false

# Input: [4,5,6,8,12], 5
# Output: true

#def bin_search(list1, num):
    

    
#midpoint high // 2
#if num > 
#
def recursive_binary_search(alist, n):
    high = len(alist)-1
    low = 0
    mid = high//2
    print(alist)

    # base cases
    if alist[mid] == n:
        return True
    # deals with an array of length 2
    if len(alist) == 2:
        if alist[1] == n:
            return True
    # return false
    elif len(alist) <= 1:
        return False
    
    # redefine the high low points
    if alist[mid] > n:
        high = mid
    else:
        low = mid

    return recursive_binary_search( alist[low:high+1] , n)

test3 = [3,7,12,14,15,20,21]
print(recursive_binary_search(test3, 3))

# [3, 7, 12, 14, 15, 20, 21]
# [3, 7, 12, 14]
# [3, 7]
# True

# [3, 7, 12, 14, 15, 20, 21]
# [14, 15, 20, 21]
# [15, 20, 21]
# [20, 21]
# True


# Approach:
# Take the middle item and compare it to the given value.
# Based on that comparison, narrow your search to a particular section of the list

# .slice can be used but is not absolutely necessary
# .slice(startIdx, endIdx)
# - returns a section of the list from startIdx to endIdx exclusive