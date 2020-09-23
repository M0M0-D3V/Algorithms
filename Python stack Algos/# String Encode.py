# String Encode
# You are given a string that may contain sequences of consecutive characters.
# Create a function to shorten a string by including the character,
# then the number of times it appears. 

# Input: "aaaabbcddd"
# Output: "a4b2c1d3"

# If result is not shorter (such as "bb" => "b2" ),
# return the original string.

string1 = 'aaaabbcddd'
string2 = 'bb'
string3 = 'ab'

def encode(mystring):
    output_string = ""
    count = 1
    for i in range(1,len(mystring),1):
        if mystring[i-1] == mystring[i]:
            count += 1
        else:
            output_string += mystring[i-1] + str(count)
            count = 1
    output_string += mystring[i-1] + str(count)
    if len(output_string) < len(mystring):
        return(output_string)
    else:
        return(mystring)

print(encode(string1))