# Given a list of items with values and weights, as well as a max weight, find the maximum value you can generate from items where the sum of teh weights is less than the max


def knapsack(items, max_weight):
    max_val = 0
    current_weight = 0
    # find max_val from looping items while sum of weights is less than max_val
    while current_weight < max_weight:
        for index in items:
            if current_weight + index['w'] < max_weight:
                current_weight += index['w']
                max_val += index['v']
                print(f'current weight is now: {current_weight}')
                print(f'max_val is now {max_val}')
    return max_val


items = [
    {'w': 1, 'v': 6},
    {'w': 2, 'v': 10},
    {'w': 3, 'v': 12}
]
maxWeight = 5
knapsack(items, maxWeight)  # 22
