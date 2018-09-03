$(document).ready(function(){ 
    $("#cep").change(function(){ 
    cep = $("#cep").val(); 
    url = "https://viacep.com.br/ws/"+cep+"/json"; 
    $.get(url, function(data, status) { 
    $("#rua").val(data.logradouro); 
    $("#cidade").val(data.localidade); 
    }, "json"); 
}); 
}); 

function ConfirmForm(){
    alert("Formulário enviado com sucesso! Obrigado.")
}
