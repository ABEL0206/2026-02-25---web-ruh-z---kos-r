function nagyitKep(melyikKep) {
    let nagyKep = document.getElementById("nagykep");
    nagyKep.src = melyikKep;
}

function visszaKep() {
    let nagyKep = document.getElementById("nagykep");
    nagyKep.src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    let termekSzama = window.prompt("Hány darabot szeretne: ");
    let kosar = document.getElementById("kosar");
    let ujElem = document.createElement("span");
    ujElem.textContent = termekSzama+" db "+" "+melyikTermek.textContent;
    kosar.append(ujElem);
    kosar.append(document.createElement("br"));
}