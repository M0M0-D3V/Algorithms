# Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

# For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

# The input will be a lowercase string with no spaces.


def capitalize(s):
    for i in range(len(s)):
        if i % 2 == 0 or i == 0:
            s[i].upper()
            print(s[i])
    opposite = s.swapcase()
    print(s)
    print(opposite)
    opposite[0].lower()
    return s, opposite


print(capitalize("blameitonme"))
