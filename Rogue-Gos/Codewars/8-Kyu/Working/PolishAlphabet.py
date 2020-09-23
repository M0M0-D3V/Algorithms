# There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

# Your task is to change the letters with diacritics:

# ą -> a,
# ć -> c,
# ę -> e,
# ł -> l,
# ń -> n,
# ó -> o,
# ś -> s,
# ź -> z,
# ż -> z
# and print out the string without the use of the Polish letters.

# For example:

# "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


def correct_polish_letters(st):
    dictionary = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z"
    }
    new_st = st
    for char in new_st:
        print(char)
        if char in dictionary:
            print(f"{char} in dictionary")
            new_st[char] = "yes"

    print(new_st)


correct_polish_letters("Jędrzej Błądziński")
