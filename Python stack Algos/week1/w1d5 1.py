#   Zip Lists into Dictionary

#   Given two lists, create an associative array (aka hash map, an obj / dictionary) containing keys from the first list, and values from the second.
#   Associative lists are sometimes called maps because a key (string) maps to a value 
#   Input: ["abc", 3, "yo"], [42, "wassup", true]
#   Output {
#     "abc": 42,
#     3: "wassup",
#     "yo": True
#   }   

# myDict["key"] = 5

# input1 = ["abc", 3, "yo"]
# input2 = [42, "wassup", True, 'cool']

# def zipit(list1,list2):
#     if len(list1) != len(list2):
#         return "Lists should be the same length. Why you trying to play me like that?"
#     output_dict = {}
#     for i in range(len(list1)):
#         # output_dict[str(list1[i])] = str(list2[i])
#         output_dict[list1[i]] = list2[i]
#     return output_dict

# print(zipit(input1, input2))

#----------------------------------------------------------------------------------------------------------------#

#   Invert Hash

#   A hash table / hash map is an obj / dictionary
#   Build invertHash(hashTable) to swap hash keys to values, and values to keys. 
#   Given: {"name": "Zaphod", "charm": "high", "morals": "dicey"}
#   return: object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

# dict1 = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
# dict2 = {"Zaphod": "name", "high": "charm", "dicey": "morals"}

# def invertHash(dict):
#     output_dict = {}
#     for key, value in dict.items():
#         output_dict[value] = key
#     return output_dict

# print(invertHash(dict1))



# Frequency Counter

# Create a function that takes a list of countries, 
# return a dictionary of all the unique countries and 
# how many people are from there.

# Input: ["Mexico", "Sweden", "Mexico", "Bolivia", "Argentina", "Argentina", "Argentina"]
# Output: {"Mexico": 2, "Sweden": 1, "Bolivia": 1, "Argentina": 3}

def frequency(list1):
    newDict = {}
    for x in range(len(list1)):
        newDict[list1[i]]