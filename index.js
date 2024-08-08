const prompt = require("prompt-sync")();

const {criar, listar, editar, remover, filtrar} = require("./backend.js")

while (true){
    console.log(`
    ==Cadastro de livros==
    O que deseja fazer?
    1. Criar livro
    2. Listar livro
    3. Editar livro
    4. Deletar livro
    5. Buscar livro
    0. Sair
    `)

    const opcao = parseInt(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            editar();
            break;
        case 4:
            remover();
            break;
        case 5:
            filtrar();
            break;
        case 0:
            console.log('Saindo do sistema, até mais!')
            process.exit();    
        default:
            console.log('Opção inválida')
            break;
    }
};