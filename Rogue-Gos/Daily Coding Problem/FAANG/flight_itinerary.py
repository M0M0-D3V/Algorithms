# This problem was asked by Facebook.

# Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

# For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

# Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

# Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.


def flight_itinerary(list_of_flights, start):
    hash = {}
    itinerary = []
    for flight in list_of_flights:
        if flight[0] not in hash:
            hash[flight[0]] = flight[1]
            print("hash is ", hash)
    # find if start exists in the list at [i][0]
    for item in hash:
        if item == start:
            # if flight is in the start then
            if hash[item]
            itinerary.append(start)
            print(item, start)


what = [('SFO', 'HKO'), ('YYZ', 'SFO')]
flight_itinerary(what, 'SFO')
# print(what[0][0])
# print(what[0][1])
# print(what[1][0])
# print(what[1][1])
