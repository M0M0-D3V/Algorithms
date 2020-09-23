// Given a 'search for' object whose values will only be primitives (ints, strings, bools)
// and a list of objects, return any object that has the same key value pairs as the 'search for' object

// given searchFor and items
const searchFor = {
  firstName: "Bob",
  age: 31,
};

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

function findOjbects(searchForArr, items) {
  const matching = items.filter((item) => {
    return (
      item.firstName === searchForArr.firstName && item.age === searchForArr.age
    );
  });
  return matching;
}

let foundItems = findOjbects(searchFor, items);
console.log(foundItems);
/* foundItems should be:
    [
      { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
      { firstName: 'Bob', lastName: 'White', age: 31 }   
    ]
  */

/* 
      //  use ID to find        //object is stuff to update arrOfObj with        // original data
  Given an id, an object that has keys with corresponding updated values, and an array of objects

  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.

  Return the updated object, or null if no object was found

  Examples:
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

function findObjectById(id, updatedObject, arrOfObj) {
  const matchUpdated = arrOfObj.filter((item, idx) => {
    return item.id === id;
    // grabbing the id that corresponds to arrOfObj
  });
  matchUpdated[0].redBeltStatus = updatedObject.redBeltStatus;
  return matchUpdated;
}

let isItRight = findObjectById(3, { redBeltStatus: true }, students);
console.log(isItRight);
//

/* 
    Input: 3, { redBeltStatus: true }, students
    Output: {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: true
    }
  
    Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
    Output: {
      id: 1,
      name: "student1",
      isLateToday: true,
      lateCount: 16,
      redBeltStatus: false
    }
  
    Input: 5, {}, students
    Output: null
  */

//   neil's solution
function fundByIdAndUpdate(id, updatedVals, collection) {
  for (const doc of collection) {
    if (doc.id === id) {
      for (const keyToUpdate in updatedVals) {
        const newVal = updatedVals[keyToUpdate];

        if (doc.hasOwnProperty(keyToUpdate)) {
          doc[keyToUpdate] = newVal;
        }
      }
      return doc;
    }
  }
  return null;
}
