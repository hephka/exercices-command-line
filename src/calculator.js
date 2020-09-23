let char = process.argv[2]
let n1 = Number(process.argv[3])
let n2 = Number(process.argv[4])

const calculator = () => {
    if (char == '+') {
        return n1 + n2
    } else if (char == '-') {
        return n1 - n2
    } else if (char == '*') {
        // * non valide, il retourne un array des fichiers de même niveau
        // '*' valide, mais expérience utilisateur de m****
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

console.log(calculator())
