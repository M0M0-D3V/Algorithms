/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]
    return a new array of the names of people who are at high risk of infection
    A person is at high risk of catching the virus if they are:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing who is infected
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {           ///******* */
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    isInfected: true,
};

const friend2 = {         ///******* */
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    isInfected: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    isInfected: false,
};

// Input:
const persons = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];
// Output: ["Person One", "Person Three"]
function findInfected(array) {
    // create new array to push into
    const infected = [];
    //loop over array
    for (let i = 0; i < array.length; i++) {
        //   if (array[i].isSocialDistancing === false && array[i].friends.isInfected === false)
        if (array[i].isSocialDistancing === false) {
            //loop thru the friends array to check 
            for (let j = 0; j < array[i].friends.length; j++) {
                if (array[i].friends[j].isSocialDistancing === false && array[i].friends[j].isInfected === true) {
                    if (!infected.includes(array[i])) {
                        infected.push((`${array[i].firstName} ${array[i].lastName}`));
                        break; // lol
                    }
                }
            }
        }
    }
    return infected;
}

//return

console.log(findInfected(persons))
//yeah, saw that too.  so maybe line 72 is not working right lol
//only the last 3 lines, enough I can see the results 

//we got person three twice, but it works
//can you see the whole terminal?
//strange.. lol
// maybe because he has two friends who are infected?
// yeah but line 72 is supposed to check for dups
// i saw Levi use "break"? will that work for us too?
//lets give it a shot
//wow
//good stuff, it works
// yay!!
//good job you guys!!! 
//  ()()
// <(^-^)> X2 ...lol
// ^.^ this is the only face i can do