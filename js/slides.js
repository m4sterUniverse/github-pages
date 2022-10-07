let i; 
let indice = 0;

let slides = document.getElementsByClassName("imgs");



// função feita para esconder os slides prévios e reenderizar o slide em questão
mudarSlide();

function mudarSlide() {


for(i=0; i < slides.length; i++) {
    slides[i].style.display = "none";

}
indice++;

if ( indice > slides.length) {
    indice = 1; 

}
        slides[indice - 1].style.display = 'block';       
        setTimeout(mudarSlide, 5000);

}




