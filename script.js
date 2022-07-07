var puissance4 = [];
var colonne = 7;
var ligne = 6;
var joueur1 = "x";
var joueur2 = "y";

puissance4 = initialise(ligne, colonne, 0);
afficher(puissance4);

function initialise(colonne, ligne, char = '') {
    var tab = [];
    for (var i = 0; i < ligne; i++) {
        var lignes = [];
        for (var j = 0; j < colonne; j++) {
            lignes.push(char);
        }
        tab.push(lignes);
    }
    return tab;
}

function afficher(tab) {
    for (var i = 0; i < tab.lenght; i++) {
        var ligne = "";
        for (var j = 0; j < tab[i].lenght; j++) {
            if (tab[i][j] === 0) {
                ligne += "_";
            } else if (tab[i][j] === 1) {
                ligne += joueur1;
            } else if (tab[i][j] === 2) {
                ligne += joueur2;
            }
        }
    }
}