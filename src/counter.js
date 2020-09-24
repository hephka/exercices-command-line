/* Ecrivez une programme counter qui prend 3 arguments en ligne de commande:

un nombre min pour le début du counter
un nombre max pour la fin du counter
un nombre step pour le pas/interval du counter
L'execution de ce programme devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step:

% node counter.js 1 10 2
1
3
5
7
9
% node counter.js 100 1000 100
100
200
300
400
500
600
700
800
900
1000 */

const count = () => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

if (process.argv.length !== 5) {
    console.log('usage: node counter.js min max step')
    process.exit(1)
}

if (
    isNaN(process.argv[2]) ||
    isNaN(process.argv[3]) ||
    isNaN(process.argv[4])
) {
    console.log(`Error: Not a number.`)
    process.exit(1)
}

let min = Number(process.argv[2])
let max = Number(process.argv[3])
let step = Number(process.argv[4])
count()
