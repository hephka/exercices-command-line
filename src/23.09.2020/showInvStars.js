/* Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande un nombre et affiche sur le terminal une pyramide comme ci-dessous:

% node showInvStars.js 3
***
**
*
% node showInvStars.js 10
**********
*********
********
*******
******
*****
****
***
**
* */

const invStars = () => {
    for (let i = nbStars; i >= 0; i -= 1) {
        console.log('*'.repeat(i))
    }
}

if (process.argv.length !== 3) {
    console.log('usage: node showInvStars.js el')
    process.exit(1)
}
if (isNaN(process.argv[2])) {
    console.log(`Error: Not a number.`)
    process.exit(1)
}

let nbStars = Number(process.argv[2])
invStars()
