let el = process.argv[2]

const palindromeChecker = () => {
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

console.log(palindromeChecker())
