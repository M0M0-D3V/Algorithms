//
//NEXT KATA
/* VASYA-CLERK
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)*/

function tickets(peopleInLine) {
    let hash = {}
    for (moneyOfPerson of peopleInLine) {
        if (moneyOfPerson == 25) {
            console.log(`receiving ${moneyOfPerson}`)
            if (!hash[moneyOfPerson]) {
                hash[moneyOfPerson] = 1
            } else {
                hash[moneyOfPerson]++
            }
            console.log('cash is now:')
            console.log(hash)
        }
        if (moneyOfPerson == 50) {
            console.log(`receiving ${moneyOfPerson}`)
            if (!hash[25] || hash[25] < 1) {
                return "NO"
            }
            if (!hash[moneyOfPerson]) {
                hash[moneyOfPerson] = 1
            } else {
                hash[moneyOfPerson]++
            }
            hash[25]--;
            console.log(`made change of 25. remaining cash`)
            console.log(hash)
        }
        if (moneyOfPerson == 100) {
            console.log(`receiving ${moneyOfPerson}`)
            if ((hash[50] >= 1 && hash[25] >= 1) || hash[25] > 2) {
                if (!hash[moneyOfPerson]) {
                    hash[moneyOfPerson] = 1
                } else {
                    hash[moneyOfPerson]++
                }
                if (hash[50] >= 1) {
                    hash[50]--
                    hash[25]--
                    console.log(`made change of 50 and 25. remaining cash`)
                    console.log(hash)
                } else {
                    hash[25] -= 3
                    console.log(`made change of 3 x 25. remaining cash`)
                    console.log(hash)
                }
            } else {
                return "NO"
            }
        }
    }
    return "YES"
}

console.log(tickets([25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100]));