//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes dos amigos
let amigosSorteados = []; // Array para armazenar os amigos já sorteados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value; // Obtém o valor do campo de entrada
    if (nomeAmigo === "") { // Verifica se o campo está vazio
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) { // Verifica se o nome já foi adicionado
        alert('Este nome já existe');
        limparCampo(); // Limpa o campo de entrada
        return;
    }

    amigos.push(nomeAmigo); // Adiciona o nome ao array de amigos
    console.log(amigos); // Exibe a lista de amigos no console
    limparCampo(); // Limpa o campo de entrada
    listaAmigos(nomeAmigo); // Atualiza a lista de amigos exibida
}

// Função para atualizar a lista de amigos exibida na página
function listaAmigos(nome) {
    const lista = document.getElementById('listaAmigos'); // Obtém o elemento da lista
    const item = document.createElement('li'); // Cria um item de lista
    item.textContent = nome; // Define o texto do item como o nome do amigo
    lista.appendChild(item); // Adiciona o item à lista
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length > 0) { // Verifica se há amigos para sortear
        let indice = parseInt(Math.random() * amigos.length); // Gera um índice aleatório
        let sorteado = amigos[indice]; // Obtém o amigo sorteado

        let resultado = document.getElementById('resultado'); // Obtém o elemento de resultado
        let item = document.createElement('li'); // Cria um item de lista

        if (amigosSorteados.includes(sorteado)) { // Verifica se o amigo já foi sorteado
            sortearAmigo(); // Chama a função novamente se já foi sorteado
        } else {
            amigosSorteados.push(sorteado); // Adiciona o sorteado ao array de sorteados
            item.textContent = `O amigo secreto sorteado é: ${sorteado}`; // Define o texto do item
            resultado.appendChild(item); // Adiciona o item ao resultado
        }
    }
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.querySelector('#amigo').value = ""; // Limpa o valor do campo de entrada
}
