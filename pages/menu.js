function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var maxL = 0;
var l = 0;
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
        maxL = 3
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
    console.log(l);
    curentWidth *= l;

    console.log(curentWidth);
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

/*function decalageDroite() {
    var item = document.getElementById('conteneur');
    var item
    var windowWidth = window.innerWidth;
    l++;
    if (window.innerWidth <= 1000) {
        switch (l) {
            case l = 0:
                item.style.marginLeft = "0%";
                break;
            case l = 1:
                item.style.marginLeft = "-70%";
                break;
            case l = 2:
                item.style.marginLeft = "-140%";
                break;
            default:
                l = 2;
        }
    }
    if (windowWidth > 1000) {
        switch (l) {
            case l = 0:
                item.style.marginLeft = "0%";
                break;
            case l = 1:
                item.style.marginLeft = "-70%";
                break;
            default:
                l = 1;
        }
    }
}*/
