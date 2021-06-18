// build an algorithm to choose a project at random to work on

function projectRoulette(projectArray) {
  return projectArray[Math.floor(Math.random() * projectArray.length)];
}

const projectIdeas = [
  "C#/.NET - OMFS Web",
  "C#/.NET - DevTrack",
  "Python - Loot Game",
  "Python/Django - Pray With Grace",
  "BUILD A SHINY NEW PROJECT!!!",
  "Portfolio",
  "JAVA - Events",
  "Something new with C#",
];

console.log(projectRoulette(projectIdeas));
