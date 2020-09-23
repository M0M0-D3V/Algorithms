/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included
  Examples:
  Input: [1, 2], [2, 1]  //if 1 = 2, increase arr2, 1=1
  Output: []
  Input: [1, 2, 3], [4, 5, 6]
  Output: [1, 2, 3, 4, 5, 6]
  Input: [4, 1, 2, 3, 4], [1, 2, 3, 5, 5]
  Output: [4, 5]
  Bonus: Make it work when given a set of sets (array of arrays of ints)
  
*/
function disjunctiveUnion(arr1, arr2) {
  newArr = [];
  let temp = 0;

  for (let i = 0; i < arr1.length; i++) {
    temp = arr1[i];
    dupeFound = false;
    for (let j = 0; j < arr2.length; j++) {
      
      if (arr1[i] == arr2[j]){
        dupeFound = true;
        break;
      }
    }
    if (dupeFound == false && arr[i] != newArr[newArr.length - 1]) {
      newArr.push(arr1[i]);
    }
    
    // here is where if dupeFound is found, push
  }
  return newArr;
}

// if number exists in another array do not include in new array

function disjunctiveUnion(arr1, arr2) {
  
console.log(disjunctiveUnion([4, 1, 2, 3, 4], [1, 2, 3, 5, 5]));


// kevin's solution
function symmetricDifferences(arr1,arr2) {
  let outputArr = [];
// step 1 copy to temp arrays
  let tempArr1 = [...arr1];
  let tempArr2 = [...arr2];
// step 2 sort the numbers
  tempArr1.sort();
  tempArr2.sort();
// step 3 eliminate dupes
  for (let i = 0; i < tempArr1.length; i++) {
    if(tempArr1[i] == tempArr1[i+1]) {
      tempArr1.splice(i,1);
      i--;
    }
  }
  console.log("array 1: ", tempArr1);

  for(let i = 0, i < tempArr2.length; i++) {
    if(tempArr2[i] == tempArr2[i+1]) {
      tempArr2.splice(i, 1);
      i--;
    }
  }
  console.log("array 2: ", tempArr2);

  let i = 0;
  let j = 0;
  // while .. darnit!
  // ikr? #bruteforcinit
}