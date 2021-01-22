// build an algorithm to choose a project at random to work on

function projectRoulette(projectArray) {
    return projectArray[Math.floor((Math.random() * projectArray.length))]
}

const projectIdeas = [
    "MERN - Kind Words",
    "MERN - TP For My Bunghole",
    "C#/.NET - OMFS Web",
    "C#/.NET - DevTrack",
    "C#/.NET - Activity Center",
    "Python - Loot Game",
    "Python/Django - Pray With Grace",
    "BUILD A SHINY NEW PROJECT!!!",
    "Portfolio"
]

console.log(projectRoulette(projectIdeas))