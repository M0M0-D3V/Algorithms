$(document).ready(function () {

const beefObject = {
    "regions" :[
        {
            "name":"CHUCK",
            "cuts": [
                {
                    "name":"Blade Chuck Roast",
                    "method":[
                    "Slow-Cook"
                    ],
                    "other":[]
                },
                {
                    "name":"Blade Chuck Steak*",
                    "method":[
                        "Grill or Broil",
                        "Slow-Cook"
                    ],
                    "other":["Marinate before cooking for best results"]
                },
                {
                    "name":"7-Bone Chuck Roast",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
                {
                    "name":"Chuck Center Roast",
                    "method":[
                        "Slow-Cook",
                        "Roast"
                    ],
                    "other":[]
                },
                {
                    "name":"Chuck Center Steak*",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Marinate before cooking for best results"]
                },
                {
                    "name":"Denver Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":[]
                },
                {
                    "name":"Chuck Eye Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":[]
                },
                {
                    "name":"Chuck Eye Roast",
                    "method":[
                        "Slow-Cook",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Country-Style Ribs",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
                {
                    "name":"Cross Rib Chuck Roast",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
                {
                    "name":"Shoulder Roast",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Shoulder Steak*",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":["Marinate before cooking for best results", "Lean"]
                },
                {
                    "name":"Ranch Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Flat Iron Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":[]
                },
                {
                    "name":"Top Blade Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"Petite Tender Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Petite Tender Medallions",
                    "method":[
                        "Skillet"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Short Ribs, Bone-In",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
            ]
        },
        {
            "name":"RIB",
            "cuts":[
                {
                    "name":"Ribeye Roast, Bone-In",
                    "method":[
                        "Roast"
                    ],
                    "other":[]
                },
                {
                    "name":"Ribeye Steak, Bone-In",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"Back Ribs",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
                {
                    "name":"Ribeye Roast, Boneless",
                    "method":[
                        "Roast"
                    ],
                    "other":[]
                },
                {
                    "name":"Ribeye Steak, Boneless",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"Ribeye Cap Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"Ribeye Petite Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Ribeye Filet",
                    "method":[
                        "Grill or Broil",
                        "Skillet-To-Oven"
                    ],
                    "other":["Lean"]
                },
            ]
        },
        {
            "name":"LOIN",
            "cuts":[
                {
                    "name":"Porterhouse Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"T-Bone Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Strip Steak, Bone-In",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Strip Steak, Boneless",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Strip Petite Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Strip Filet",
                    "method":[
                        "Grill or Broil",
                        "Skillet-To-Oven"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Tenderloin Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Tenderloin Filet",
                    "method":[
                        "Grill or Broil",
                        "Skillet-To-Oven"
                    ],
                    "other":["Lean"]
                },
            ]
        },
        {
            "name":"SIRLOIN",
            "cuts":[
                {
                    "name":"Top Sirloin Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Sirloin Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":[]
                },
                {
                    "name":"Top Sirloin Petite Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Top Sirloin Filet",
                    "method":[
                        "Grill or Broil",
                        "Skillet-To-Oven"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Coulotte Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":[]
                },
                {
                    "name":"Tri-Tip Roast",
                    "method":[
                        "Grill or Broil",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Tri-Tip Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Petite Sirloin Steak",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"Sirloin Bavette*",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Marinate before cooking for best results"]
                },
            ]
        },
        {
            "name":"ROUND",
            "cuts":[
                {
                    "name":"Top Round Steak*",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Marinate before cooking for best results","Lean"]
                },
                {
                    "name":"Bottom Round Roast",
                    "method":[
                        "Slow-Cook",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Bottom Round Steak*",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":["Marinate before cooking for best results","Lean"]
                },
                {
                    "name":"Bottom Round Rump Roast",
                    "method":[
                        "Slow-Cook",
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Eye of Round Roast",
                    "method":[
                        "Roast"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Eye of Round Steak*",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Lean"]
                },
            ]
        },
        {
            "name":"BRISKET",
            "cuts":[
                {
                    "name":"Brisket Flat",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Brisket Point",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
            ]
        },
        {
            "name":"PLATE & FLANK",
            "cuts":[
                {
                    "name":"Skirt Steak*",
                    "method":[
                        "Grill or Broil",
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":["Marinate before cooking for best results"]
                },
                {
                    "name":"Flank Steak*",
                    "method":[
                        "Gril or Broil",
                        "Stir-Fry"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Short Ribs, Bone-In*",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":["Marinate before cooking for best results"]
                },
            ]
        },
        {
            "name":"OTHER",
            "cuts":[
                {
                    "name":"Kabobs*",
                    "method":[
                        "Grill or Broil"
                    ],
                    "other":["Marinate before cooking for best results"]
                },
                {
                    "name":"Strips",
                    "method":[
                        "Skillet",
                        "Stir-Fry"
                    ],
                    "other":[]
                },
                {
                    "name":"Cubed Steak",
                    "method":[
                        "Slow-Cook",
                        "Skillet"
                    ],
                    "other":[]
                },
                {
                    "name":"Stew Meat",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":[]
                },
                {
                    "name":"Shank Cross Cut",
                    "method":[
                        "Slow-Cook"
                    ],
                    "other":["Lean"]
                },
                {
                    "name":"Ground Beef and Ground Beef Patties",
                    "method":[
                        "Grill or Broil",
                        "Skillet"
                    ],
                    "other":[]
                },
            ]
        }
    ]
}


let searchMethod = "Skillet"
let searchOther = "Lean"
let countFoundMethod = 0, countFoundOther = 0
let countRegions = beefObject.regions.length
let countCuts = 0
const regionsArr = []
const cutsArr = []
const methodArr = []

for(let regionIdx in beefObject.regions) {
    // [x] prints out all the regional names of thee cow
    // console.log(`${regionIdx}: ${beefObject.regions[regionIdx].name}`)
    regionsArr.push(beefObject.regions[regionIdx].name)
    for(let cutIdx in beefObject.regions[regionIdx].cuts) {
        // [x] prints all the cuts in each region of cow
        // console.log(`   ${cutIdx}: ${beefObject.regions[regionIdx].cuts[cutIdx].name}`)
        cutsArr.push(beefObject.regions[regionIdx].cuts[cutIdx].name)
        countCuts++
        for(let methodIdx in beefObject.regions[regionIdx].cuts[cutIdx].method) {
            // [x] prints all methods for cooking each cut of each region of cow
            // console.log(`      ${methodIdx}: ${beefObject.regions[regionIdx].cuts[cutIdx].method[methodIdx]}`)
            if(beefObject.regions[regionIdx].cuts[cutIdx].method[methodIdx].includes(searchMethod)) {
                // console.log(beefObject.regions[regionIdx].cuts[cutIdx].name)
                countFoundMethod++
            }
        }
        for(let otherIdx in beefObject.regions[regionIdx].cuts[cutIdx].other) {
            if(beefObject.regions[regionIdx].cuts[cutIdx].other[otherIdx].includes(searchOther)) {
                countFoundOther++
                // console.log(beefObject.regions[regionIdx].cuts[cutIdx].name)
            }
        }
    }
}
let printRegions = ""
for (let region of regionsArr) {
    printRegions += region + "\n"
}
let printCuts = ""
for (let cut of cutsArr) {
    printCuts += cut + "\n"
}
document.getElementById("beefRegions").innerHTML += printRegions;
document.getElementById("beefCuts").innerHTML += printCuts;

const db = JSON.stringify(beefObject)
document.getElementById("justBeef").innerHTML = db

console.log(`countRegions: ${countRegions}, countCuts: ${countCuts}, countFoundMethod: ${countFoundMethod}`)
let answer = countFoundMethod / countCuts * 100
let otheranswer = countFoundOther / countCuts * 100
console.log(`% of cuts cooked using ${searchMethod} is: ${answer.toFixed(2)}%`)
console.log(`% of cuts with note ${searchOther} is: ${otheranswer.toFixed(2)}%`)

// and inside "types" list: each type has (list) different meats and each meat has several ways to cook them

// dictionary key "cooking method":
// ways to cook is a list
})
