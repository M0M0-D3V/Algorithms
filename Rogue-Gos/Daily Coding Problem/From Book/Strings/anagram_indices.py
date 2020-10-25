# Given a word w and a string s, find all indices in s which are the starting locations of anagrams of w.
# For example, given w is ab and s is abxaba, return [0, 3, 4].


from collections import defaultdict
from collections import Counter


def anagram_indices(w, s):
    locations = []
    temp_words = []
    length = len(w)
    hashT = {}
    hashW = {}
    for letter in w:
        if letter in hashW:
            hashW[letter] += 1
        else:
            hashW[letter] = 1
        print(hashW)
    # get length of w and loop through s to group substrings by length
    for i in range(len(s)):
        # individual substrings for length of w
        if i + length < len(s):
            temp = s[i: i + length]
            print(temp)
            for j in range(len(temp)):
                if temp[j] in hashT:
                    hashT[temp[j]] += 1
                else:
                    hashT[temp[j]] = 1
                print(hashT)

            # make a for loop for in hashW and check if T is there and matching values, if not matching, then do not append

        #    if hashT == hashW:
        #         locations.append(i)
            # temp_words.append(s[i: i + length])
            # print(temp_words)

    return locations


yes = anagram_indices("ab", "abxaba")
print(f'yes is {yes}')

# brute force method from book


def is_anagram(s1, s2):
    return Counter(s1) == Counter(s2)


def anagram_indices(word, s):
    result = []
    for i in range(len(s) - len(word) + 1):
        window = s[i:i + len(word)]
        if is_anagram(window, word):
            result.append(i)
    return result

# the above takes O(w x s)


# better one from book


def del_if_zero(dict, char):
    if dict[char] == 0:
        del dict[char]


def anagram_indices(word, s):
    result = []

    freq = defaultdict(int)
    for char in word:
        freq[char] += 1

    for char in s[:len(word)]:
        freq[char] -= 1
        del_if_zero(freq, char)

    if not freq:
        result.append(0)

    for i in range(len(word), len(s)):
        start_char, end_char = s[i - len(word)], s[i]
        freq[start_char] += 1
        del_if_zero(freq, start_char)

        if not freq:
            beginning_index = i - len(word) + 1
            result.append(beginning_index)

    return result

# this one runs in O(s) time and space
