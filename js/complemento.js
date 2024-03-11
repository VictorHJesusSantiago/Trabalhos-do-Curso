function enviar(){
    var nome=document.getElementById("nome")
    var email=document.getElementById("email")
    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
            alert("ENVIADO COM SUCESSO! Agradecemos a mensagem!")
        }
    }
   
}
