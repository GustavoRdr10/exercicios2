/* Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado, e, exiba o valor
da multa, cobrando R$5,00 por cada Km acima da velocidade permitida. se o
valor for menor que 80km/h, exiba uma mensagem dizendo que o veículo está
dentro da velocidade permitida. */

let velocidadeCarro = prompt("Digite a velocidade do veículo:")

function multa() {
    let cobrancaMulta = (velocidadeCarro -80) *5;
    if (velocidadeCarro > 80){
        alert("Voce foi multado")    
        document.write("voce pagará uma multa de: R$", cobrancaMulta.toFixed(2));
    }else {
        alert("Voce esta sem multa");
    }
}
multa();