# String: Rotate String

# Create a standalone function that accepts a string and an integer, and rotates 
# the characters in the string to the right by that given integer amount.

# Input: "Hello World", 0
# Output: "Hello World"

# Input: "Hello World", 1
# Output: "dHello Worl"

# Input: "Hello World", 2
# Output: "ldHello Wor"

# CHALLENGE: Go backwards!
# Input: "Hello World", -1
# Output: "ello WorldH"

# Good Morning John and Monica!
# Good Morning to you too Petra!
# Hello!

# Options
# 1) Cycle string by n via for loop 
# 2) If n<0 versus n>0  ie cycle 
# forward through for loop or backward through the for loop.
# 3) Divide by length of astring and rotate by remainer.


def rotate_str(astring,num):

    if num == 0:
        return astring
    
    if num > len(astring):
        num = num % len(astring)
        

    if num > 0: # rotate right
        for i in range(num): 
            astring = astring[-1] + astring[:-1]
        return astring           
    
    else:
        for i in range(num * -1):
            astring = astring[1:] + astring[0]      
        return astring

     
print(rotate_str("Hello World",27))
            # iterate i times through the integer
            # do the rotation (to the right)

    else: # num < 0 (so we rotate left)
        pass

def rotate(astring, n):
    if n > len(astring):
        n = n % len(astring)

    if n == 0:
        return astring

    if n > 0:
        for i in range(n):
            astring = astring[-1] + astring[:-1]
        return astring

    else:
        for i in range(n * -1):  #so gewd
            astring = astring[1:] + astring[0]      
        return astring

print(rotate("Hello World", 700))

import time
start = time.time()
solution = rotate("Hello World", 1000000)
elapsed = time.time() - start
print(f"{solution} found in {elapsed} seconds.") 

# Where n = 1 million
# dHello Worl found in 7.3909759521484375e-06 seconds. (With Monica's optimization)
# dHello Worl found in 0.3795657157897949 seconds.

# # Where n = 10 million 
# ello WorldH found in 3.814697265625e-06 seconds.
# ello WorldH found in 2.5876779556274414 seconds.

def rotate(astring, n):

    if n == 0:
        return astring

    # this will work wether or not n > len(astring)
    n = n % len(astring)

    if n > 0:
        return astring[-n:] + astring[:-n]
    else:
        return astring[n*-1:] + astring[:n*-1]

import time
start = time.time()
solution = rotate("Hello World", 10000000)
elapsed = time.time() - start
print(f"{solution} found in {elapsed} seconds.") 

print(rotate("Hello World", 0)) # Output -> Hello World
print(rotate("Hello World", 2)) # Output -> ldHello Wor
print(rotate("Hello World", -2)) # Output -> llo WorldHe
print(rotate("Hello World", 22)) # Output -> Hello World
print(rotate("Hello World", 23)) # Output -> dHello Worl





#NEW ASSIGNMENT
# [1, -2, -3, 3, -4] input
# [1, 3] output

def remove_neg(alist)
    for i in range(len(alist)):
    if alist[i] < 0:
        del alist[i]
    else:
        return alist
    return alist
print(remove_neg(alist))

# for loops in python need while #to mimic what JS can do with i+=3
# splice - change in place and uses ??
# slice - copies section and uses [] 

def remove_negatives(alist):
    i = 0
    limit = len(alist)

    while i < limit:
        
        if alist[i] < 0:
            value = alist[i] # a negative number
            alist.remove(value) # removes the first instance of value
            
            removing = True # this is a flag
            while removing:
                try:
                    alist.remove(value) 
                except ValueError:
                    removing = False
    
        else:
            i += 1
        
        try:
            alist[i]
        except IndexError:
            break

    return alist

test = [1, -2, -3, 3, -4, 5, -5, -5]


print(remove_negatives(test))
# Output: [1, 3, 5]


def frequency_table(alist):
    output = {}
    for k in set(alist):
        if k < 0:
            output[k] = alist.count(k)
    return output

def remove_negatives(alist):
    table = frequency_table(alist)
    # k,v for negatives in alist

    for k,v in table.items():
        for i in range(v):
            alist.remove(k)
    return alist


