const path = require('path')
const fs = require('fs')
const JSONStream = require('JSONStream')

const main = () => {
    // Reading file by package
    const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
    const list = raw.split(/\r?\n/)
    list.pop()

    const getGroupValue = (group) => {
        // Get the 3 values of the group
        const [first, second, third] = group

        // Convert first 2 strings into array to find common characters
        // Then compare to the last to find the common character
        const common = first.split('').filter(char => second.split('').includes(char)).filter(char => third.split('').includes(char))[0]
        
        // Find the value of this character
        // Char code of lowercase a is 97
        // Char code of uppercase A is 65
        const value = common === common.toLowerCase() ? common.charCodeAt(0) - 96 : common.charCodeAt(0) - 38
        console.log(common, value)

        // Return the value
        return value
    }

    let result = 0
    let group = []
    list.forEach(value => {
        // Add actual value to actual group
        group.push(value)

        // We have a group of 3
        if (group.length > 2) {
            result += getGroupValue(group)

            // Reinit group stacker
            group = []
        }
    }, [])

    // Printing result
    console.log('result = ', result) 
}

main()