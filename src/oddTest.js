let number = Number(process.argv[2])

const oddTest = () => {
    return number % 2
        ? `${number} est un nombre impair`
        : `${number} est un nombre pair`
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${number} is not a number.`)
    process.exit(1)
}

if (process.argv.length !== 3) {
    console.log('usage: node oddTest.js number')
    process.exit(1)
}

console.log(oddTest())
