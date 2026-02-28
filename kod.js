const ram = 53850;
const monitor = 70000;
const hdd = 34615;
const ssd = 51900;
const psu = 18410;

let totalPriceContainer = document.getElementById("total");
let totalPrice = 0;
function nagyitKep(melyikKep) {
    let nagyKep = document.getElementById("nagykep");
    nagyKep.src = melyikKep;
}

function visszaKep() {
    let nagyKep = document.getElementById("nagykep");
    nagyKep.src = "ures.jpg";
}

function arSzamitas(element){
    let priceText = document.getElementById(element.id+"Price");
    switch (element.id) {
        case "ram":
            priceText.value = ram * element.value +" FT";
            totalPrice += parseInt(priceText.value, 10);
            break;

        case "monitor":
            priceText.value = monitor * element.value + " FT";
            totalPrice += parseInt(priceText.value, 10);
            break;
        
        case "hdd":
            priceText.value = hdd * element.value + " FT";
            totalPrice += parseInt(priceText.value, 10);
            break;

        case "ssd":
            priceText.value = ssd * element.value + " FT";
            totalPrice += parseInt(priceText.value, 10);
            break;
        case "psu":
            priceText.value = psu * element.value + " FT";
            totalPrice += parseInt(priceText.value, 10);
            break;
    }
    totalPriceContainer.innerText = totalPrice + " FT";
}