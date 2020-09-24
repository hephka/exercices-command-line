/* Ecrivez un script oddTest.js qui vérifit si l'argument passé en ligne de commande est impair:

% node oddTest.js 7
7 est un nombre impair
% node oddTest.js 10
10 est un nombre pair */

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

let number = Number(process.argv[2])
console.log(oddTest())
