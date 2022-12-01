const path = require('path')
const fs = require('fs')
const JSONStream = require('JSONStream')

const main = () => {
    const [ path ] = process.argv.slice(2)
    
    // wrong params handling
    if (!path) {
        console.log(`Please give all params: node [--max_old_space_size=50] solution.ts [PATH]`)
        return 0
    } else {
        console.log('...loading')
    }

    // reading file by package
    const raw = fs.readFileSync(path, { encoding: 'utf8' })
    const list = raw.split(/\r?\n/)

    let result = []
    let count = 0
    list.forEach(element => {
        const item = parseInt(element)
        if (Number.isInteger(item)) {
            count += item
        } else {
            result.push(count)
            count = 0
        }
    })

    // printing result
    console.log('result = ', result.sort((one, two) => (one > two ? -1 : 1)).slice(0, 3).reduce((a, b) => a+b)) 
}

main()