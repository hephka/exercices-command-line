/* Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:

% node sayGoodbye.js React
Goodbye, React */

const goodbye = () => {
    console.log(`Goodbye, ${name}`)
}

let name = process.argv[2]
goodbye()