javascript: var time = prompt("How many minutes?");
time = parseFloat(time);
if (time) {
  setTimeout(function () {
    new Audio(
      "https://freesound.org/data/previews/446/446127_758593-lq.mp3"
    ).play();
  }, time * 60000);
}
