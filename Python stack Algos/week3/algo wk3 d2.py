x = [1, 4, 4, 5, 5, 5, 5, 5, 8, 9, 9, 19, 20]
y = 19


def searchparty(mylist, searchnumber):
    startingpoint = 0
    endingpoint = len(mylist)-1
    if mylist[endingpoint-1] < y or mylist[startingpoint] > y:
        return False
    while startingpoint < endingpoint:
        middle = (endingpoint + startingpoint) // 2
        print(
            f"starting while~~ startingpoint {startingpoint} - endingpoint {endingpoint} - middle {middle}")
        if mylist[middle] == searchnumber or mylist[startingpoint] == searchnumber or mylist[endingpoint] == searchnumber:
            return True
        if middle == startingpoint:
            return False
        elif mylist[middle] < searchnumber:
            startingpoint = middle
        else:
            endingpoint = middle
    return False


print(searchparty(x, y))
