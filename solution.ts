const fs = require('fs')

const main = () => {
        // Reading file by package
        const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
        const list = raw.split(/\r?\n/)
        list.pop()
    
        // Write your solution here
        let result = 0
        list.forEach(value => {
            result += value.length
        }, [])
    
        // Printing result
        console.log('result = ', result) 
}

main()