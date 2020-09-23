# #1. Reverse Word Order
# Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.

# Input: "This is a test"

# [] 1- loop through string and built into empty str or list
# [] 2- if "space" then build new word
# Output: "test a is This"


# def reverse_words(str):
#     store_str_to_list = []

#     for i in str:

#     return new_string
x = "This is a test"


def rev(x):
    x = x[::-1]
    print(x)
    return x


rev(x)

# #2. Frequency Table
#
# [x] Given an array of strings
# [] return a sum to represent how many times each array item is found (a frequency table)
# Useful methods:
#   Object.hasOwnProperty("keyName")
#     - returns true or false if the object has the key or not
#   Python: dict.has_key(key)
# Examples:
# Input: ['a', 'a', 'a', '']
# Output: {
#   'a': 3
# }
# Input: ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']
# Output: {
#   a: 2,
#   b: 1,
#   c: 3,
#   B: 1,
#   d: 1
# }

word_str = ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']
new_word = {}


def sumstring(word_str):
    count = 0
    for i in range(len(word_str)):
        if word_str[i] == 'a':
            new_word[word_str[i]] = word_str[i]
            count += 1
            word_str[i] = count
            print(new_word)


sumstring(word_str)

# def returnsum(list):
#     dictionary = {}
#     for i in list:
#         if list[i] not in dictionary:

#     return dictionary
