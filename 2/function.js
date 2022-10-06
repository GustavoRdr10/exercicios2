/* Desenvolva um algoritmo que escreva uma mensagem com o conceito de um
aluno, dada a sua nota. O critério para conceitos é o seguinte:
nota 10 conceito A 
nota inferiores a 3 conceito E
nota de 3 a 5 conceito D
notas 6 e 7 conceito C
notas 8 e 9 conceito B */
let nota = prompt("Digite sua nota")

function notaAluno() {
    if (nota == 10) {
        alert('Seu conceito é A');
    }
    else if (nota < 3) {
        alert('Seu conceito é E');
    }
    else if (nota >= 3 && nota <= 5) {
        alert('Seu conceito é D');
    }
    else if (nota >= 6 && nota <= 7) {
        alert('Seu conceito é C');
    }
    else if (nota >= 8 && nota <= 9) {
        alert('Seu conceito é B');
    }
}
notaAluno();
