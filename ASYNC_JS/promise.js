const readLine = require('readLine');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const demanderPrenom = () => {
    return new promise(resolve => {
        rl.question(`Quel est ton prénom ?, &{resolve}`)
    })
}

const demanderNom = () => {
    return new promise(resolve => {
        rl.question(`Quel est ton nom ?, &{resolve}`)
    })
}
const demanderAge = () => {
    return new promise(resolve => {
        rl.question(`Quel est ton Age ?, &{resolve}`)
    })
}

const demarrerProgramme = () => {

    demanderPrenom()
        .then(prenom => {
            console.log(`Ton prenom est &{prenom}`);
            return demanderNom()
        })
        .then(nom => {
            console.log(`Ton est &{nom}`);
            return demanderAge()
            rl.close();
        })
        .then(age => {
            console.log(`Ton est &{age}`);

            rl.close();
        })


}

demarrerProgramme()