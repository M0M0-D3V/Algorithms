
# Recursive Sigma
# Input: integer
# Output: sum of integers from 1 to Input integer

# Examples:
# rSigma(5) = 15 (1+2+3+4+5);
# rSigma(2.5) = 3 (1+2);
# rSigma(-1) = 0


def rSigma(num):
    if num == 1:
        return 1
    else:
        return num + rSigma(num - 1)


def recursive_sigma(n):
    return 1 if n == 1 else (n + recursive_sigma(n-1))


def recursive_factorial(n):
    return 1 if n <= 1 else (n * recursive_factorial(n-1))

# Recursive Factorial
# Input: integer
# Output: integer, product of ints from 1 up to given integer

# If less than zero, treat as zero.
# Bonus: If not integer, truncate (remove decimals).

# Experts tell us 0! is 1.

# rFact(3) = 6 (1*2*3)
# rFact(-1) = 1


def rFact(num):
    if n <= 1:
        return 1
    else:
        return num * rFact(num - 1)

# Given a NxN spiral array like this one:

    # 13, 14, 15, 16, 17
    # 12,  3,  4,  5, 18
    # 11,  2,  1,  6, 19
    # 10,  9,  8,  7, 20
    # 25, 24, 23, 22, 21

    # Where N is the length of each side (in this example, N = 5)

    # Give the sum of both diagonals when N = 1001.

    # For example, the solution for this problem when N = 5 is 101
    # because 1 + 3 + 5 + 7 + 9 + 25 + 13 + 17 + 21 = 101

    # Corner values:

    # n**2
    # n**2 - (n - 1)
    # n**2 - 2 * (n-1)
    # n**2 - 3 * (n - 1)

    # The sum of a square is (4 * n**2 - 6*n + 6)


def solve_spiral_array(n):
    # base case
    if n == 1:
        return 1
    return ((4 * n**2 - 6 * n + 6) + solve_spiral_array(n - 2))
