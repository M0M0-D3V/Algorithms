// Ninjas frequently need to signal each other in code, often employing natural sounds as a cover. We’re going to give our ninja the ability to chirp like a cricket, with the number of chirps encoding different messages.

// Implement a "recursive function" that takes one parameter (n) and outputs a string i.e.

//   chirp(4);
//output would be chirp-chirp-chirp-chirp.

function Chirp(n) {
    if (n === 0) {
        return "";
    }
    if (n === 1) {
        return "chirp";
    }
    if (n > 1) {
        return "chirp-" + Chirp(n - 1);
    }
    // n === 0 ? "" : n === 1 ? "chirp" : "chirp-" + Chirp(n - 1);
}

console.log(Chirp(5))