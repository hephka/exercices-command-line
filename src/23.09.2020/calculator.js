/* Ecrivez un script calculator.js qui effectue en ligne de commane des opérations arithmétiques simples:

% node calculator.js + 10 21
31
% node calculator.js - 10 1
9
% node calculator.js * 5 4
20
% node calculator.js / 10 2
5 */

const calc = () => {
    if (char == '+') {
        return n1 + n2
    } else if (char == '-') {
        return n1 - n2
    } else if (char == '*') {
        return n1 * n2
    } else if (char == '/') {
        return n1 / n2
    } else {
        console.log(`Error: Symbole non valide.`)
    }
}

if (process.argv.length !== 5) {
    console.log('usage: node calculator.js char n1 n2')
    process.exit(1)
}

if (isNaN(process.argv[3]) && isNaN(process.argv[4])) {
    console.log(`Error: Not a number.`)
    process.exit(1)
}

let char = process.argv[2]
let n1 = Number(process.argv[3])
let n2 = Number(process.argv[4])
console.log(calc())
