import readlineSync from 'readline-sync'
import chalk from 'chalk'

/* Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande. Le programme s'éxecutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument du programe à son lancement, les messages suivant lui appaitront:

si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert */

const findNumber = () => {
    let gameOver = false
    while (!gameOver) {
        let userNumber_str = readlineSync.question('Trouve le nombre caché: ')
        let userNumber = Number(userNumber_str)
        if (isNaN(userNumber)) {
            console.log(chalk.red('Error: Vérifiez cette information'))
        }

        if (userNumber > myNumber) {
            console.log(chalk.red('Nombre trop grand'))
        } else if (userNumber < myNumber) {
            console.log(chalk.red('Nombre trop petit'))
        } else {
            console.log(chalk.green('Bravo!'))
            gameOver = true
        }
    }
}

if (process.argv.length !== 3) {
    console.log(chalk.red('Usage: node guessNumber.js myNumber'))
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Error: Vérifiez cette information`))
    process.exit(1)
}

let myNumber = process.argv[2]
findNumber()
