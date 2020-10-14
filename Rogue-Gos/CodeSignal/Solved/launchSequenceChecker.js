function launchSequenceChecker(systemNames, stepNumbers) {
    // loop through systems and add systems key and stepnumbers val to hash
    let hash = {}
    for(let i = 0; i < systemNames.length; i++) {
        if(hash[systemNames[i]]) {
            if(hash[systemNames[i]] > stepNumbers[i] || hash[systemNames[i]] == stepNumbers[i]) {
                return false
            }
        }
        hash[systemNames[i]] = stepNumbers[i]
    }
    return true
}

