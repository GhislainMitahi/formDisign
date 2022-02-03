const readLine = require('readLine');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const demarrerProgramme = () => {
    const lireAge = age => {
        console.log(`Ton Age est : &{age}`);
        rl.close();
    }

    const lireNom = nom => {
        console.log(`Ton nom est : &{nom}`)
        rl.question('Quel est ton age ?', lireAge)
    }

    const lirePrenom = prenom => {
        console.log(`Ton prenom est &{prenom}`);
        rl.question(`Quel est ton nom ?, &{lireNom}`)
    }

    rl.question(`Quel est ton Prenom ?, &{lirePrenom}`)
}

demarrerProgramme()