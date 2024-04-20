var pesquisarCep = async() => {
    var cep = document.getElementById('inputCEP').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    var dados = await fetch(url);
    var endereco = await dados.json();
    console.log(endereco);
    document.getElementById('inputEndereco').value = endereco.localidade;

}