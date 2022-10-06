/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer
em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até
200Km e R$0.45 para viagens mais longas. */

let distancia = prompt("Qual distancia voce deseja percorrer?");
function precoPassagem() {
    let valor1 = distancia * 0.50 ;
    let valor2 = distancia * 0.45;
    if (distancia <= 200) {
        document.write("O valor da passagem será:R$ ", +valor1.toFixed(2))
    } else {
        document.write("O valor da passagem será:R$ ", +valor2.toFixed(2));
    }
}
precoPassagem();