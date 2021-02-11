// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given 2 strings, write a function to check if they are one edit (or zero edits) away

// examples:
// pale, ple => true
// pales, pale => true
// pale, bale => true
// pale, bake => false

function oneAway(string1, string2) {
    if(string1.length == string2.length) {
        return oneReplace(string1, string2)
    }
    else if(string1.length + 1 == string2.length) {
        return oneInsert(string1, string2)
    }
    else if(string1.length - 1 == string2.length) {
        return oneInsert(string2, string1)
    }
    return false
}

function oneReplace(string1, string2) {
    let foundDifference = false
    for (let i = 0; i < string1.length; i++) {
        if(string1.charAt(i) != string2.charAt(i)) {
            if(foundDifference) {
                return false
            }
            foundDifference = true
        }
    }
    return true
}

function oneEdit(string1, string2) {
    let idx1 = 0
    let idx2 = 0
    while(index2 < string2.length() && idx1 < string1.length) {
        if(string1.charAt(idx1) != string2.charAt(idx2)) {
            if(idx1 != idx2) {
                return false
            }
            idx2++
        }
        else {
            idx1++
            idx2++
        }
    }
    return true
}