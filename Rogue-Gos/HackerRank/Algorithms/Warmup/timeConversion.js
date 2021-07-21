// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let newTime = ""
    let hour = s[0] + s[1]
    if(s.includes("PM")) {
        if(parseInt(hour) !== 12) {
            hour = parseInt(hour) + 12
        }
    }
    else if(s.includes("AM")) {
        if(parseInt(hour) === 12) {
            hour = parseInt(hour) - 12
        }
    }
    newTime = hour.toString()
    for(let i = 2; i < s.length - 2; i++) {
        newTime += s[i]
    }
    console.log(newTime)
    return newTime
}

timeConversion("11:05:45PM")