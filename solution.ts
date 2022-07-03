const path = require('path')
const fs = require('fs')
const JSONStream = require('JSONStream')

const main = () => {
    const [ path, id ] = process.argv.slice(2)
    let found = false
    
    // wrong params handling
    if (!path || !id) {
        console.log(`Please give all params: node --max_old_space_size=50 solution.ts [PATH] [ID]\nMissing: ${!path ? '[PATH]' : ''}${(!path && !id) ? ' & ' : ''}${!id ? '[ID]' : ''}`)
        return 0
    } else {
        console.log('...loading')
    }

    // reading file by package
    const stream = fs.createReadStream(path, { encoding: 'utf8', flag: 'r' })

    // parsing text stream to json
    stream.pipe(JSONStream.parse('*')).on('data', data => {
        // output the right answer
        if (data.id.toString() === id) {
            console.log(data.name)
            found = true
        }
    });

    // no result
    stream.on('end', () => !found ? console.log('not found') : '')    
}

main()