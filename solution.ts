const fs = require('fs')

const main = () => {
        // Reading file by package
        const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
        const list = raw.split(/\r?\n/)
        list.pop()
    
        let count = 0
        list.forEach(value => {
            const [pairA, pairB] = value.split(',')
            const [a1, a2] = pairA.split('-').map(a => parseInt(a))
            const [b1, b2] = pairB.split('-').map(b => parseInt(b))
            
            const result = a1 <= b2 && b1 <= a2 
            if (result) count++
            console.log(value, result)
        })
    
        // Printing result
        console.log('result = ', count) 
}

main()