var pesquisarCep = async() => {
    var cep = document.getElementById('cep').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    var dados = await fetch(url);
    var endereco = await dados.json();
    console.log(endereco);
    retornaCampos(endereco);    
}

function retornaCampos(endereco){
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('numero').value = endereco.ddd;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}