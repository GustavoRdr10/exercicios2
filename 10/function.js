/* Desenvolva um programa que receba o nome e a temperatura corporal de uma
pessoa, e classifique, informando a classificação e mensagem, conforme a tabela:
Temperatura Classificação Mensagem
até 25,8 Hipotermia Consulte um médico
25,9 até 35,8 Baixa Agasalhe-se e observe
35,9 até 37,0 Normal Você está bem
37,1 até 37,5 Elevada Descanse um pouco
37,6 até 38,0 Febre ligeira Meça a temperatura regularmente e
descanse
38,1 até 38,5 Febre moderada Meça a temperatura regularmente e
consulte um médico se permanecer 1 dia. 
38,6 até 39,5 Febre alta Consulte um médico.
39,6 até 42,0 Febre muito alta Dirija-se à um serviço de urgência médica*/
let nome = prompt("Digite seu nome");
let temperatura = prompt("Digite sua temperatura corporal:");

function temperaturaCorporal() {
    if (temperatura <= 25.8) {
        alert("Hipotermia");
        document.write(`${nome}. Consulte um médico.`);
    } else if (temperatura >= 25.9 && temperatura <= 35.8) {
        alert("Baixa ");
        document.write(`${nome}. Agasalhe-se e observe.`);
    } else if (temperatura >= 35.9 && temperatura <= 37) {
        alert("Normal ");
        document.write(`${nome}. Você está bem.`);
    } else if (temperatura >= 37.1 && temperatura <= 37.5) {
        alert("Elevada ");
        document.write(`${nome}. Descanse um pouco.`);
    } else if (temperatura >= 37.6 && temperatura <= 38) {
        alert("Febre ligeira ");
        document.write(`${nome}. Meça a temperatura regularmente e descanse.`);        
    } else if (temperatura >=38.1 && temperatura <=38.5) {
        alert("Febre moderada ");
        document.write(`${nome}. Meça a temperatura regularmente e consulte um médico se permanecer 1 dia.`);
    }else if (temperatura >=38.6 && temperatura <=39.5) {
        alert("Febre alta ");
        document.write(`${nome}. Consulte um médico.`);
    } else if (temperatura >= 39.6 && temperatura <=42) {
        alert("Febre muito alta ");
        document.write(`${nome}. Dirija-se à um serviço de urgência médica.`);
    }
}
temperaturaCorporal();