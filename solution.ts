const path = require('path')
const fs = require('fs')
const JSONStream = require('JSONStream')

const main = () => {
    // reading file by package
    const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
    const list = raw.split(/\r?\n/)
    list.pop()

    let result = 0
    list.forEach(element => {
        // Split a string into two equivalent
        const middle = element.length / 2 
        let s1 = element.substring(0, middle);
        let s2 = element.substring(middle);
        console.log(`${s1}, ${s2}`)
        console.log(`${s1.length}, ${s2.length}`)

        // Convert both string into array to find a common character
        const common = s1.split('').filter(char => s2.split('').includes(char))[0]
        console.log('common = ', common)
        
        // Find the value of this character
        // Char code of lowercase a is 97
        // Char code of uppercase A is 65
        console.log('is lowercase', common === common.toLowerCase())
        const value = common === common.toLowerCase() ? common.charCodeAt(0) - 96 : common.charCodeAt(0) - 38
        console.log('value = ', value)

        // Add to the final result
        result += value
    })

    // printing result
    console.log('result = ', result) 
}

main()