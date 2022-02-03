    const readLine = require('readLine');

    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    const demarrerProgramme = () => {
        rl.question('Quel est ton prenom ?', reponse => {
            console.log(`Ton prenom est ${reponse}`);

            rl.close()
        })
    }

    demarrerProgramme()