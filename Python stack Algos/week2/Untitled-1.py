def is_anagram(input1, input2):
    dictionary1 = make_dictionary(input1)
    dictionary2 = make_dictionary(input2)
    # compare dictionaries?
    print(dictionary1)
    print(dictionary2)
    return dictionary1 == dictionary2
        

#match each dictionary key values     

def make_dictionary(input):
    output = {}
    for i in range(len(input)):
        if input[i] != " ":
            # update
            if input[i].lower() in output:
                output[input[i].lower()] = output[input[i].lower()] + 1
            else:
                output[input[i].lower()] = 1
    
    return output
print(is_anagram("yes", "ey s"))




new_list = [
    { "name": "Grain of Rice", "quantity": 9000 },
    { "name": "Peanut Butter", "quantity": 50 },
    { "name": "Royal Jelly", "quantity": 20 },
]
curr_list = [
    { "name": "Peanut Butter", "quantity": 20 },
    { "name": "Grain of Rice", "quantity": 1 },
]
def update_inventory(list1, list2):
    for i in range(len(list1)):
        print(list1[i])
        

# if k,v in list2.item()?
#   
#easy as 'key name' += new stuff?



    return list2

print(update_inventory(new_list,curr_list))

def update_inventory2(list1, list2): 
    main_dict = {}

    for i in range(len(list1)):
        main_dict[list1[i]['name']] = list1[i]['quantity']

    print(main_dict)

    for i in range(len(list2)):
        if list2[i]['name'] in main_dict:
            main_dict[list2[i]['name']] = main_dict[list2[i]['name']] + list2[i]['quantity']
        else:
            main_dict[list2[i]['name']] = list2[i]['quantity']

    print(main_dict)

    output = []
    for key,value in main_dict.items():
        output.append({'name':key, 'quantity':value})
    print (output)
    return output

update_inventory2(new_list, curr_list)