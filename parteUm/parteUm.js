//Eu fiz todos os sortings em C, mas o código ficou muito extenso e dificilmente algum ambiente Web usará C, eu optei por outra linguagem mais moderna.
//Como JavaScript tem a biblioteca Math de forma nativa, irei utilizar o Math.floor arredondamento (e em outras aplicações).
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivo = array[Math.floor(array.length / 2)];
    //definindo o pivô como o meio do array
    var esquerda = [];
    var direita = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivo) {
            //comparação com o pivô
            esquerda.push(array[i]);
            //separação do array menor
        } else if (array[i] > pivo) {
            direita.push(array[i]);
            //separação do array maior
        }
    }
    
    return quickSort(esquerda).concat(pivo, quickSort(direita));
    //junção dos dois arrays
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    var meio = Math.floor(array.length / 2);
    var esquerda = array.slice(0, meio);
    //do inicio ao meio
    var direita = array.slice(meio);
    //do meio em diante
    
    return merge(mergeSort(esquerda), mergeSort(direita));
}

function merge(esquerda, direita) {
    let resultado = [];
    let indiceEsquerda = 0;
    let indiceDireita = 0;

    while (indiceEsquerda < esquerda.length && indiceDireita < direita.length) {
        //definição do loop
        if (esquerda[indiceEsquerda] < direita[indiceDireita]) {
            //se o numero da esquerda no indice atual é menor que sua contraparte na direita...
            resultado.push(esquerda[indiceEsquerda]);
            //parte principal do mergeSort, separando dois arrays
            indiceEsquerda++;
        } else {
            resultado.push(direita[indiceDireita]);
            indiceDireita++;
        }
    }

    return resultado.concat(esquerda.slice(indiceEsquerda)).concat(direita.slice(indiceDireita));
    //junção dos dois arrays
}

function bubbleSort(array) {
    let tamanho = array.length;
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - 1; j++) {
            if (array[j] > array[j + 1]) {
                //comparação do indice atual com o próximo
                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
                //substituição dos números agora ordenados
            }
        }
    }
    return array;
}

function gerarArray(tamanho) {
    var array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(Math.floor(Math.random() * 1000)); // números aleatórios entre 0 e 999
    }
    return array;
}

function testePerformance() {
    var tamanhos = [1000, 5000, 10000]; // tamanhos das listas a serem ordenadas
    var metodos = [quickSort, mergeSort, bubbleSort];
    
    for (const tamanho of tamanhos) {
        //iterando sobre tamanhos
        let array = gerarArray(tamanho);
        console.log(`\nTestando com array de tamanho ${tamanho}:`);
        
        for (const metodo of metodos) {
            //iterando sobre metodos
            var inicio = performance.now();
            //inicio da quantificação de tempo
            metodo(array.slice()); 
            //necessário para não repetir arrays
            var fim = performance.now();
            //fim da quantificação de tempo
            var tempoFinal = fim - inicio;
            //média
            console.log(`${metodo.name}: ${tempoFinal .toFixed(4)} milissegundos`);
        }
    }
}

testePerformance();