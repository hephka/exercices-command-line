import readlineSync from 'readline-sync'
import chalk from 'chalk'

/* Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter */

const majority = () => {

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

majority()