const a_input = document.getElementById("a_szam");
const b_input = document.querySelector("#b_szam");
const kijelzo = document.querySelector("#eredmeny"); 

function osszead(){
    a= parseFloat( a_input.value);
    b= parseFloat( b_input.value);
    kijelzo.innerHTML = "összeadva:"+(a + b).toString();
}

function kivon(){
    a = parseFloat( a_input.value);
    b = parseFloat( b_input.value);
    kijelzo.innerHTML = "kivonva:" +(a - b).toString();
}

function szorzas(){
    a = parseFloat( a_input.value);
    b = parseFloat( b_input.value);
    kijelzo.innerHTML = "szorozva:" +(a * b).toString();
}

function osztas(){
    a = parseFloat( a_input.value);
    b = parseFloat( b_input.value);
    kijelzo.innerHTML = "osztva:" +(a / b).toString();
}