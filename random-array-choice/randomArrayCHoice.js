var guestList = ['Angela','Michael','Alisa','Christian','Aaron'];

function payer() {
    var elementToChoose = Math.floor(Math.random() * guestList.length);
    console.log(elementToChoose);
    return guestList.at(elementToChoose);
}

console.log(payer());