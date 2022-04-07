function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var l = 0;

function decalageGauche() {
    var item = document.getElementById('conteneur');
    var windowWidth = window.innerWidth;
    l--;
    if (windowWidth <= 900) {
        switch (l) {
            case l = 0:
                item.style.marginLeft = "0%";
                break;
            case l = 1:
                item.style.marginLeft = "-70%"
                break;
            case l = 2:
                item.style.marginLeft = "-140%"
                break;
            default:
                l = 0;
        }
    }
    if (windowWidth > 900) {
        switch (l) {
            case l = 0:
                item.style.marginLeft = "0%";
                break;
            case l = 1:
                item.style.marginLeft = "-70%"
                break;
            default:
                l = 0;
        }
    }
}

function decalageDroite() {
    var item = document.getElementById('conteneur');
    var windowWidth = window.innerWidth;
    l++;
    if (windowWidth <= 900) {
        switch (l) {
            case l = 0:
                item.style.marginLeft = "0%";
                break;
            case l = 1:
                item.style.marginLeft = "-70%"
                break;
            case l = 2:
                item.style.marginLeft = "-140%"
                break;
            default:
                l = 2;
        }
    }
    if (windowWidth > 900) {
        switch (l) {
            case l = 0:
                item.style.marginLeft = "0%";
                break;
            case l = 1:
                item.style.marginLeft = "-70%"
                break;
            default:
                l = 1;
        }
    }
}
