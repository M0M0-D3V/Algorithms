function isPangram(string) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let low = string.replace(/[&\/\\#,+()$~%.'":*?<>{}\s*]/g, "").toLowerCase();
    let count = 0;
    let hash = {};
    for (let char of low) {
        if (!hash[char]) {
            hash[char] = 1;
            count++;
            console.log(
                `we're looking at ${char} and count is now ${count}`
            )
        }
    }
    return count >= 26;
}
console.log(isPangram("abcdefghijklmpqrstuvwxyz"));