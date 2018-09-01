<script src="jquery-3.3.1.min.js"></script>
 
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