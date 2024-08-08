const prompt = require("prompt-sync")();

const livros = [];

let ultimoId = 1

const modelo = (id) => {

    const nome = prompt('Digite o nome do livro: ');
    const autor = prompt('Digite o nome do autor do livro: ');
    const ano = prompt('Digite o ano do livro: ');
    const genero = prompt('Digite o gênero do livro: ');
    const anoNovaVersao = prompt('Digite o ano da nova versão do livro: ');

    if (nome != "" && autor != "" && ano != "" && genero != "" && anoNovaVersao != ""){
        let livros
        if (id != undefined){
            livros = {nome, autor, ano, genero, anoNovaVersao, id:ultimoId}
        } else {
            livros = {nome, autor, ano, genero, anoNovaVersao, id:ultimoId}
        }
        ultimoId++
        return livros
    } else {
        console.log('Dados inválidos.')
    }
};

const criar = () => {
    const livro = modelo();

    if (livro != undefined){
        livros.push(livro)
        console.log('Livro adicionado.')
    } else {
        ultimoId--
    }
};

const listar = () => {

    if (livros.length > 0){
        livros.forEach(livro => {
            console.log(`${livro.id}. Nome: ${livro.nome} - Autor: ${livro.autor} - Ano: ${livro.ano} - Gênero: ${livro.genero} - Ano da Nova Versão: ${livro.anoNovaVersao}`)
        });
        return true;
    } else {
        console.log('Não há livros cadastrados.')
        return false;
    }
};

const editar = () => {
    if(listar()){
        const id = prompt('Digite o id que deseja editar: ');

        const novo = modelo(id)

        const index = livros.findIndex(livro => id == livro.id)

        if(index != -1){
            livros[index] = novo
            console.log('Edição realizada com sucesso.')
        } else {
            console.log('Id não localizado.')
        }
    }
};

const remover = () => {
    if(listar()){
        const id = prompt('Digite o id que deseja remover: ');
    
        const index = livros.findIndex(livro => id == livro.id)
    
        if(index != -1){
            livros.splice(index,1)
            console.log('Remoção realizada com sucesso.')
        } else {
            console.log('Id não localizado.')
        }
    }
};

const filtrar = () => {
    console.log(`Pelo que deseja buscar um livro:
    1. Nome
    2. Autor
    3. Ano
    4. Gênero
    5. Ano da nova versão
    `)

    const opcao = parseInt(prompt('Escolha uma opção: '))

    let chave 
    let valor

    switch (opcao) {
        case 1:
            chave = "nome"
            valor = prompt('Nome do livro: ')
            break;
        case 2:
            chave = "autor"
            valor = prompt('Nome do autor do livro: ')
            break;
        case 3:
            chave = "ano"
            valor = prompt('Ano do livro: ')
            break;
        case 4:
            chave = "genero"
            valor = prompt('Gênero do livro: ')
            break;
        case 5:
            chave = "anoNovaVersao"
            valor = prompt('Ano da nova versão do livro: ')
            break;
        default:
            console.log('Opção inválida.')
            break;
    }

    const resultados = livros.filter(livro => livro[chave] == valor)

    if(resultados.length >= 1){
        resultados.forEach(livro => {
            console.log(`${livro.id}. Nome: ${livro.nome} - Autor: ${livro.autor} - Ano: ${livro.ano} - Gênero: ${livro.genero} - Ano da Nova Versão: ${livro.anoNovaVersao}`)
        })
    } else {
        console.log('Nenhum resultado encontrado.')
    }
};

module.exports = {criar, listar, editar, remover, filtrar}