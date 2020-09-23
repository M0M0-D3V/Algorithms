def balance_point(list_of_integers):
    left_sum = 0
    right_sum = 0
    ending = len(list_of_integers)
    placeholder = len(list_of_integers)
    while placeholder != 0:
        for i in range(len(list_of_integers) - placeholder):
            left_sum += list_of_integers[i]

        for i in range(len(list_of_integers - placeholder + 1), ending):
            right_sum += list_of_integers[i]

        if right_sum == left_sum:
            print(true)
            return True

        if right_sum != left_sum:
            placeholder = placeholder - 1
            right_sum = 0
            left_sum = 0

    print(false)
    return False

    call_it = balance_point([1, 2, 3, 4, 10])
    print(call_it)
