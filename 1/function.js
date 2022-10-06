/* Desenvolva um algoritmo que faz a leitura do ano atual e do ano de
nascimento de uma pessoa. Calcule a idade (não é necessário considerar o mês
em que a pessoa nasceu). Escrever uma mensagem que diga se ela poderá ou
não votar este ano , considerando que se sua idade for menor que 16 anos não
pode, se for maior ou igual a 16 anos pode votar.*/
let anoNascimento = prompt("Digite seu ano de nascimento");
let anoAtual = prompt("Digite o ano atual");
let idade = anoAtual - anoNascimento;

function eleicao() {
    const voto = idade >= 16 ? 'Você podera votar' : 'Você não podera votar!!!!!';
    document.write(voto);
}
eleicao();