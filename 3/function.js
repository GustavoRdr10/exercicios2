/* Escreva um algoritmo que apresente uma lista com as opções A, B e C. Caso o
usuário digite a letra A, escreva a mensagem “Opção A digitada”. Caso o usuário
digite a letra B, escreva a mensagem “Opção B digitada”. Caso o usuário digite a
letra C, escreva a mensagem “Opção C digitada”. Caso o usuário digite qualquer
outro valor, deve ser apresentada a mensagem “Opção Inválida”. */

let opcaoDesejada = prompt("Por favor, escolha sua opção:\n A - Opção A\n B - Opção B\n C - Opção C");

switch (opcaoDesejada) {
    case 'a':
        alert('Opção A digitada')
        break;
    case 'b':
        alert('Opção B digitada')
        break;
    case 'c':
        alert('Opção C digitada')
        break;
    default:
        alert('Opção Inválida')
        break;
}

