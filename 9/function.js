/* Faça um programa que leia a largura e o comprimento de um terreno retangular,
calculando e mostrando a sua área em m². O programa também deve mostrar a
classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP */
 
let larguraTerreno = prompt("Digite a largura do terreno:");
let comprimentoTerreno = prompt("Digite o comprimento do terreno:");
let area = larguraTerreno * comprimentoTerreno;

function classificacaoTerreno() {
    if (area <100){
        document.write("Terreno Popular");
    } else if (area >=100 && area <500) {
        document.write("Terreno Master");
    }else if (area >=500) 
        document.write("Terreno Vip");
}
classificacaoTerreno();