const fs = require('fs')

const main = () => {
        // Reading file by package
        const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
        const list = raw.split(/\r?\n/)
        list.pop()

        // Removing the first 10 lines (matrix)
        list.splice(0, 10)

        // Manually transposed matrix
        const matrix = [
            ['B', 'G', 'S', 'C'],
            ['T', 'M', 'W', 'H', 'J', 'N', 'V', 'G'],
            ['M', 'Q', 'S'],
            ['B', 'S', 'L', 'T', 'W', 'N', 'M'],
            ['J', 'Z', 'F', 'T', 'V', 'G', 'W', 'P'],
            ['C', 'T', 'B', 'G', 'Q', 'H', 'S'],
            ['T', 'J', 'P', 'B', 'W'],
            ['G', 'D', 'C', 'Z', 'F', 'T', 'Q', 'M'],
            ['N', 'S', 'H', 'B', 'P', 'F'],
        ]
        
        list.forEach((line, index) => {
            const [txt1, moves, txt2, origin, txt3, direction] = line.split(' ').map(str => parseInt(str))
            let count = moves
            while (count > 0) {
                const removed = matrix[origin -1].pop()
                matrix[direction - 1].push(removed)
                count--
            }
            if (index) {
                console.log(line)
                console.log(matrix)
            }
        })

        // Final result
        console.log(matrix.map(line => line[line.length - 1]).join(''))
}

main()