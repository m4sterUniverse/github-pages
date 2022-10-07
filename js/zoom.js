const mapa = document.getElementById("mapa");
const  btn_in = document.getElementById("in");
const btn_out = document.getElementById("out");


let tamanho = mapa.style.backgroundSize;



btn_in.addEventListener ("click", 

function eventoBotao () {
    
        mapa.style.backgroundSize = "150%";
    
});

btn_out.addEventListener ("click", 

function zoomOut () {
    mapa.style.backgroundSize = "100%";
});