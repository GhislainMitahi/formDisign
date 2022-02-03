// Fonction qui genere un nombre aleatoire 
// retourne le nombre
const lancerDe = function() {
    const nombreDecimal = (Math.random() * 6) + 1;
    const nombre = Math.trunc(nombreDecimal)
    return nombre;
}

console.log(lancerDe());