/* Escreva um algoritmo para representar o funcionamento de uma calculadora.
Primeiramente, leia dois números reais. Em seguida, apresente as opções: ‘1’ =
soma, ‘2’ = subtração, ‘3’ = multiplicação, ‘4’ = divisão. Conforme a opção
selecionada, realize o cálculo correspondente com os dois números lidos. */

let primeiroNumero = prompt("Digite o primeiro número");
let segundoNumero = prompt("Digite o segundo número");
let operador = prompt("Escolha o operador que deseja utilizar: \n 1 - Soma \n 2 - Subtração \n 3  Multiplicação \n 4 - Divisão");


switch (operador) {
  case '1':
    resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);
    alert(resultado);
    break;
  case '2':
    resultado = parseInt(primeiroNumero) - parseInt(segundoNumero);
    alert(resultado);
    break;
  case '3':
    resultado = parseInt(primeiroNumero) * parseInt(segundoNumero);
    alert(resultado);
    break;
  case '4':
    resultado = parseInt(primeiroNumero) / parseInt(segundoNumero);
    alert(resultado);
    break;
}