function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var maxL = 0;
var l = 1;
var decDroite = false;
var decGauche = false;


function decalageGauche() {
    if (l > 1) {
        l--;
    }
    decGauche = true;
    decalage();
}
function decalageDroite() {
    if (window.innerWidth <= 1000) {
        maxL = 4;
    }
    else if (window.innerWidth > 1000){
        maxL = 2
    }
    else if (window.innerWidth <= 900){
        maxL = 5
    }

    if (l < maxL) {
        l++;
    }

    decDroite = true;
    decalage();
}
function decalage() {
    let items = document.getElementsByClassName("item");
    let width = items[0].offsetWidth;
    let curentWidth = -width;
    let conteneur = document.getElementById("conteneur");
    curentWidth *= l;
    if (decGauche) {
        curentWidth += width;
        conteneur.style.marginLeft = curentWidth.toString() + "px";
        decGauche = false;
    }
    if (decDroite) {
        conteneur.style.marginLeft = curentWidth.toString() + "px";
        decDroite = false;
    }

}
