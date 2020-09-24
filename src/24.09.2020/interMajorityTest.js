import readlineSync from 'readline-sync'
import chalk from 'chalk'

/* Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme précedent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondera à l'age de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21
Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18
Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter */

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
