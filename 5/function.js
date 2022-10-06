/* Uma empresa abriu uma linha de crédito para os funcionários. O valor da
prestação não pode ultrapassar 30% do salário. Desenvolva um programa que
receba o salário, o valor do empréstimo e o número de prestações e informe
se o empréstimo pode ser concedido. */

let salario = parseInt(prompt("Digite seu salário:"));
let valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo:"));
let numeroPrestacao = parseInt(prompt("Em quantas vezes voce irá parcelar:"));
let meses = numeroPrestacao * 12;
let prestacao = valorEmprestimo / meses
function linhaCredito() {
    percentual = (prestacao / salario) * 100;
    if (percentual > 30.0) {
        alert('Empréstimo Concedido!!')
    } else {
        alert('Emprestimo negado');
    }
}
linhaCredito();





