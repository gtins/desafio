var pesquisarCep = async() => {
    esvaziarCampos();
    var cep = document.getElementById('cep').value;
    verificar(cep);
    if (verificar(cep) === true){
        var url = `https://viacep.com.br/ws/${cep}/json/`;
        var dados = await fetch(url);
        var endereco = await dados.json();
        if(endereco.erro){
            alert("CEP Não Encontrado");
        } else {
            console.log(endereco);
            retornaCampos(endereco);   
        }
    } 
}

function retornaCampos(endereco){
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('numero').value = endereco.ddd;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

function verificar(cep){
    if(cep.length > 9 || cep.length < 7){
        alert("CEP Inválido - CEP precisa conter 8 dígitos!");
        return false;
    } else if (apenasNumeros(cep)){
        alert("CEP Inválido - CEP não pode conter letras!")
        return false;
    } else {
        return true;
    }
}

function apenasNumeros(str) {
    return /\D/.test(str); 
  }
  
function esvaziarCampos(){
    document.getElementById('endereco').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}