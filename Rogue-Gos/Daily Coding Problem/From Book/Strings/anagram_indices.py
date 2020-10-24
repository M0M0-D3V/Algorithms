# Given a word w and a string s, find all indices in s which are the starting locations of anagrams of w.
# For example, given w is ab and s is abxaba, return [0, 3, 4].


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
