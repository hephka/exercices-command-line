import readlineSync from 'readline-sync'
import chalk from 'chalk'

const interMajority = () => {
    if (age < countryMajority) {
        console.log(
            `Désolé, ${firstname} ${lastname}, vous êtes mineur, vous ne pouvez pas voter`
        )
    } else {
        console.log(
            chalk.green(
                `${firstname} ${lastname}, vous êtes majeur, vous pouvez voter`
            )
        )
    }
}

let lastname = readlineSync.question('Nom: ')
if (!isNaN(lastname)) {
    console.log(chalk.red('Error: Vérifiez cette information'))
    process.exit(1)
}
let firstname = readlineSync.question('Prénom: ')
if (!isNaN(firstname)) {
    console.log(chalk.red('Error: Vérifiez cette information'))
    process.exit(1)
}
let age_str = readlineSync.question('Age: ')
let age = Number(age_str)
if (isNaN(age)) {
    console.log(chalk.red('Error: Vérifiez cette information'))
    process.exit(1)
}

if (process.argv.length !== 3) {
    console.log(chalk.red('Usage: node interMajorityTest.js age'))
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Error: Vérifiez cette information`))
    process.exit(1)
}

let countryMajority = Number(process.argv[2])
interMajority()
