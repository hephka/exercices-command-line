let min = Number(process.argv[2])
let max = Number(process.argv[3])
let step = Number(process.argv[4])

const counter = () => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

if (process.argv.length !== 5) {
    console.log('usage: node counter.js min max step')
    process.exit(1)
}

if (
    isNaN(process.argv[2]) &&
    isNaN(process.argv[3]) &&
    isNaN(process.argv[4])
) {
    console.log(`Error: Not a number.`)
    process.exit(1)
}

counter()
