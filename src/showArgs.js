let reverse = process.argv.reverse()

const showArgs = () => {
    for (let i = 0; i <= reverse.length - 3; i += 1) {
        console.log(reverse[i])
    }
}

showArgs()
