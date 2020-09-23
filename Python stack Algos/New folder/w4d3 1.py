
# Recursive Sigma
# Input: integer
# Output: sum of integers from 1 to Input integer

# Examples:
# rSigma(5) = 15 (5+4+3+2+1);
# rSigma(-1) = 0


def recur_sigma(num1):
    if num1 > 0:
        sum = num1 + recur_sigma(num1 - 1)
        return sum
    else:
        return 0


print(recur_sigma(5))


# Recursive Factorial
# Input: integer
# Output: integer, product of ints from 1 up to given integer

# If less than zero, treat as zero.

# Experts tell us 0! is 1.

# rFact(3) = 6 (1*2*3)
# rFact(-1) = 1

def recur_fact(num1):
    if num1 == 0:
        return 1
    elif num1 < 0:
        return 1
    elif num1 > 0:
        result = num1 * recur_fact(num1-1)
        return result
    else:
        return 1


print(recur_fact(3))
