// HT en TTC
function prixTTC(price) {
    return price * 1.2;
}

// Puissance
function puissance(x, y) {
    let z = 1;
    for (let i = 1; i <= y; i++) {
        z *= x;
    }
    return z;
}

// Année bissextile
function bissextile(annee) {
    if ((annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0)) {
        // console.log(annee + ' est une année bissextile');
        return true;
    } else {
        // console.log(annee + ' n\'est une année bissextile');
        return false;
    }
}

// Creéation du tableau d'années -> 2020
var tab2020 = [];
for (let i = 0; i < 2020; i++) {
    tab2020[i] = i + 1;
}

var tabBissextile = [];
for (let i = 0; i < tab2020.length; i++) {
    if (bissextile(tab2020[i]) === true) {
        tabBissextile.push(tab2020[i]);
    }
}

// Factoriel
function factoriel(numb) {
    for (let i = numb - 1; i >= 1; i--) {
        numb *= i;
    }
    return numb;
}

// Calcul de l'IS
function calculIS(ca) {
    let taxe = 1;
    if (ca <= 38000) {
        return taxe = ca * 0.15;
    } else {
        return taxe = (38000 * 0.15) + ((ca - 38000) * 0.25);
    }
}

// function copyText(param) {
//     document.getElementById("monid").innerHTML = param;
// }

function afficheValueTTC() {
    document.getElementById("monid").innerHTML = prixTTC(document.getElementById("moninput").value);
}

function affichePuissance() {
    let nombre = document.getElementById("nbinput");
    let puissancenb = document.getElementById("puissanceinput");
    let resultpuissance = document.getElementById("resultpuissance");
    resultpuissance.innerHTML = puissance(nombre.value, puissancenb.value);
}