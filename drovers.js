const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    // const numberNeeded = cattleToDrive / 10
    const numberNeeded = herdSize / 10
    // Needed to divide 'herdSize', the parameter, by 10 instead of 'cattleToDrive', which isn't defined.

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }

    return drovers
    // Missing return statement
}

module.exports = { hireDrovers }