/* Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre quantos anos faltam para o alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento. */

let anoNascimento = prompt("Digite o ano do seu nascimento:");

function alistamentoMilitar() {
    let anoAtual = 2022;
    let idade = anoAtual - anoNascimento;
    let maiorDezoito = 18 - idade;
    let menorDezeoito = idade - 18;
    if (idade == 18) {
        document.write("Voce tem que se alistar imediatamente");
    } else if (idade < 18) {
        document.write("Voce ainda não tem 18 anos, Ainda faltam ", +maiorDezoito+ " anos para se alistar");
    } else if (idade > 18) {
        document.write("Voce deveria ter se alistado há ", +menorDezeoito+ " anos")
    }
}
alistamentoMilitar();