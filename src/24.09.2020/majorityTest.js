import readlineSync from 'readline-sync'
import chalk from 'chalk'

const majority = () => {
    if (age < 18) {
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
if (age === parseInt(age) || age >= 0) {
    console.log(chalk.red('Error: Vérifiez cette information'))
    process.exit(1)
}

majority()
