# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([False,1,0,1,2,0,1,3,"a"]) # returns[False,1,1,2,1,3,"a",0,0]


def move_zeros(array):
    new_list = []
    zero_list = []
    for item in array:
        if item != 0 or item is False:
            new_list.append(item)
        elif item == 0:
            zero_list.append(item)
    new_list += zero_list
    return new_list


print(move_zeros([1, None, 2, 1, 0, False, 0]))
