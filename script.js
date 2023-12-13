var a = document.getElementById("Adultos")
var c = document.getElementById("Crianças")
var h = document.getElementById("Horas")

var carne = document.getElementById("carne")
var cerveja = document.getElementById("cerveja")
var refriagua = document.getElementById("refriagua")


function calcu(){
    let horas = h.value
    if (horas<=6){
        let Carnes = (parseInt(a.value) + parseInt(c.value)/2) * 400;
        let Cerveja = (a.value) * 1200;
        let RefriAgua = (parseInt(a.value) + parseInt(c.value)/2) * 1000;
        console.log(Carnes, Cerveja, RefriAgua)

        ///////////////////////////////////////////////
        carne.innerText = Carnes + " gramas de carne";
        cerveja.innerText = Cerveja + " ML de cerveja";
        refriagua.innerText = RefriAgua + "ML de refrigerante ou água";

    }
    else{
        let Carnes = (parseInt(a.value) + parseInt(c.value)/2) * 650;
        let Cerveja = (a.value)* 2000;
        let RefriAgua = (parseInt(a.value) + parseInt(c.value)/2) * 1500;
        console.log(Carnes, Cerveja, RefriAgua)
        ///////////////////////////////////////////////
        carne.innerText = Carnes + " gramas de carne";
        cerveja.innerText = Cerveja + " ML de cerveja";
        refriagua.innerText = RefriAgua + "ML de refrigerante ou água";
    }


}