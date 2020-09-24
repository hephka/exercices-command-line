/* Ecrivez un script palindromeChecker.js qui verifit si l'argument passé en ligne de commande est un palindrome:

% node palindromeChecker.js tenet
tenet is a palindrome
% node palindromeChecker.js 3133773313
3133773313 is a palindrome
% node palindromeChecker.js Alyra
Alyra is not a palindrome */

const palindrome = () => {
    let reverse = ''
    for (let i = el.length - 1; i >= 0; i--) {
        reverse += el[i]
    }
    return el === reverse
        ? `${el} is a palindrome`
        : `${el} is not a palindrome`
}

if (process.argv.length !== 3) {
    console.log('usage: node palindromeChecker.js el')
    process.exit(1)
}

let el = process.argv[2]
console.log(palindrome())
