const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const textAreaMensagem = document.getElementById("textAreaMensagem");

form.addEventListener ("submit", (e) => {
    e.preventDefault();
    checkinputs();
});
    


function checkinputs () {
    const usernameValue = username.value;
    const emailValue = email.value;
  

    if (usernameValue === ''){
        setErrorFor(username, "O Nome é obrigatório");}
        else{
            setSuccessFor(username);
        }

        if (emailValue=== ""){
            setErrorFor(email,"O email é obrigatório");
        }else if (!checkEmail(emailValue)){
            setErrorFor (email,"Por favor, insira um email válido")

        }
        else{
            setSuccessFor(email)
        
        }
        const formControl = form.querySelectorAll(".form-control");

        const formIsValid = [...formControl].every((formControl) => {
        return(formControl.className === "form-control success");
        });
        
        if (formIsValid){
           window.location = "obrigado.html"
        }
 


       
    }


function setErrorFor (input, message){
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");

   // Adicionar a mensagem de error
   small.innerText = message;

   // Adiciona a classe de erro
   formControl.className = "form-control error";

}

function setSuccessFor(input){
const formControl = input.parentElement;
// Adicionar Classe de sucesso
formControl.className = "form-control success";
}




function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }