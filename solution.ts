const fs = require('fs')

function hasRepeats (str) {
    return /(.).*\1/.test(str);
}

const main = () => {
        // Reading file by package
        const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
    
        // Write your solution here
        let index = 4
        while (index < raw.length) {
            const test = raw.substring(index - 4, index)
            if (index < 10) console.log(index, test)
            if (!hasRepeats(test)) break
            index++
        }
    
        // Printing result
        console.log('result = ', index) 
}

main()