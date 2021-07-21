// HackerLand University has the following grading policy:

// Every student receives a grades in the inclusive range from 0 to 100.
// Any grades less than 40 is a failing grades.
// Sam is a professor at the university and likes to round each student's grades according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] % 5 !== 0 && grades[i] >= 38) {
            let nearest5 = (Math.ceil(grades[i] / 5) * 5)
            let diff = Math.abs(grades[i] - nearest5)
            if(diff < 3) {
                grades[i] += diff
            }
        }
    }
    return grades
}

console.log(gradingStudents([4, 73, 67, 38, 33]))