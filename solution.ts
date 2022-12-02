const path = require('path')
const fs = require('fs')
const JSONStream = require('JSONStream')

const main = () => {    
    // const rockMapping = ['A', 'X']
    // const paperMapping = ['B', 'Y']
    // const scissorsMapping = ['C', 'Z']

    // reading file by package
    const raw = fs.readFileSync('input.txt', { encoding: 'utf8' })
    const list = raw.split(/\r?\n/)

    let result = 0
    list.forEach(element => {
        let count = 0
        const [player1, _, player2] = element
        console.log(`${player1}+${player2}`)
        switch (player1) {
            case 'A': {
                // Rock
                switch (player2) {
                    case 'X': {
                        // Rock
                        // Draw
                        count = 1 + 3
                        break
                    }
                    case 'Y': {
                        // Paper
                        // Win
                        count = 2 + 6
                        break
                    }
                    case 'Z': {
                        // Scissor
                        // Loose
                        count = 3 + 0
                        break
                    }
                }
                break
            }
            case 'B': {
                // Paper
                switch (player2) {
                    case 'X': {
                        // Rock
                        // Loose
                        count = 1 + 0
                        break
                    }
                    case 'Y': {
                        // Paper
                        // Draw
                        count = 2 + 3
                        break
                    }
                    case 'Z': {
                        // Scissor
                        // Win
                        count = 3 + 6
                        break
                    }
                }
                break
            }
            case 'C': {
                //Scissor
                switch (player2) {
                    case 'X': {
                        // Rock
                        // Win
                        count = 1 + 6
                        break
                    }
                    case 'Y': {
                        // Paper
                        // Loose
                        count = 2 + 0
                        break
                    }
                    case 'Z': {
                        // Scissor
                        // Draw
                        console.log('test')
                        count = 3 + 3 
                        break
                    }
                }
                break
            }
        }
        console.log(count)
        result += count
    })

    // printing result
    console.log('result = ', result) 
}

main()