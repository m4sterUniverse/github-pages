/*Código responsável por verificar se os botões para fechar e abrir o Chat da Juliette estão sendo clicados e processando o resultado esperado

AUTOR: LUCAS A C M LOPES

*/

setTimeout(aparecerdiv, 5000);


const fechar = document.getElementById("fechar");
const abrir = document.getElementById("abrir");

const chat = document.getElementById("chat");
const chatFechado = document.getElementById("chat-fechado");

function aparecerdiv() {
    chat.style.display = 'block';
}

fechar.addEventListener ("click", 
function fechar() {
    chat.style.display = "none";
    chatFechado.style.display = "block";

});

abrir.addEventListener ("click", 
function abrir() {
    chatFechado.style.display = "none";
    chat.style.display = "block";
});





/*Código responsável por verificar se os botões para fechar e abrir o Chat da Juliette estão sendo clicados e processando o resultado esperado 

*/





const formulario = document.getElementById('enviar');
const input = document.getElementById('msg');
const lista = document.getElementById('lista-msgs');


formulario.addEventListener('submit', function (e) {
    /*var novo = document.createTExtNode(' <li class="msgs">Boa tarde! Como posso te ajudar?</li> ');
    lista.appendChild(input.value);
    document.open();
    document.write(input.value);
    document.close();*/
 })



