def palindrome(str):
    stor = len(str)//2
    for x in range(0, stor):
        if str[x] != str[len(str)-1-x]:
            return False
    return True


print(palindrome("hello"))  # should be False
print(palindrome("11a11"))  # should be True
#
#
# numero dos
