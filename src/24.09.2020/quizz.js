import readlineSync from 'readline-sync'
import chalk from 'chalk'

/* Ecrivez un qcm de 5. Le joueur devra repondre aux questions en entrant le nombre correspondant à la bonne réponse. A la fin du qcm vous lui donnerez sa note qui correspondera au nombre de bonnes reponses sur les 5 questions. Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

Question 1: Le C++ est un:
1: language => réponse attendue
2: compilateur

Question 2: TypeScript est une évolution de Javascript:
1: Vrai => réponse attendue
2: Faux

Question 3: Lire les cours avant de faire les éxercices est inutile:
1: Vrai
2: Faux => réponse attendue

Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux => réponse attendue

Question 5: Ethereum est une blockchain publique:
1: Vrai => réponse attendu
2: Faux */

const choice = {
    choix1: ['09h30', '10h30', '09h27', 'Quand je voudrais bien me lever'],
    choix2: ['des restits', 'des cours', 'des exercices', 'des veilles'],
    choix3: [
        'je suis attentif',
        "j'achète des cryptos",
        "j'envoie des textos",
        'Quels cours !?',
    ],
}

const questions = {
    index1: readlineSync.keyInSelect(
        choice.choix1,
        'A quelle heure commence la formation Alyra chaque jour de la semaine ?'
    ),
    index2: readlineSync.keyInSelect(
        choice.choix2,
        'Par quoi commence-t-on notre journée ?'
    ),
    index3: readlineSync.keyInSelect(choice.choix3, 'Pendant le cours: '),
}

const myQuizz = () => {
    let score = 0
    let gameOver = false

    while (!gameOver) {
        for (let i = 0; i <= questions.length - 1; i += 1) {
            switch (questions[i]) {
                case 0:
                    if ((i = 2)) {
                        score += 1
                    }
                    break
                case 1:
                    break
                case 2:
                    if ((i = 0)) {
                        score += 1
                    }
                    break
                case 3:
                    if ((i = 1)) {
                        score += 1
                    }
                    break
            }
            return score
        }
        gameOver = true
    }
    console.log(chalk.cyan(`Vous avez ${score} bonne(s) réponse(s)`))
}

if (process.argv.length !== 2) {
    console.log(chalk.red('Usage: node quizz.js'))
    process.exit(1)
}

myQuizz()

// L'incrémentation de score n'est pas fonctionnel depuis que j'ai voulu tout mettre dans une boucle 