let nbStars = Number(process.argv[2])

const showInvStars = () => {
    for (let i = nbStars; i >= 0; i -= 1) {
        console.log('*'.repeat(i))
    }
}

showInvStars()
