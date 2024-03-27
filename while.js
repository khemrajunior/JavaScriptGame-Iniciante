/* Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

alert('Criando um contado de 1 ate 10');

let contador = 1


while (contador < 10) {
    alert(contador);
    contador++;
    
    console.log(contador);

    if (contador === 10) {
        alert('Numero chegou a 10');
        console.log('acabou');       
    }
}

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

alert('Contar o numero de 10 ate 0 e mostrando no alerta');

let contador = 10


while (contador > 0) {
    alert(contador);
    contador--;
    
    console.log(contador);

    if (contador === 0) {
        alert('Numero chegou a 0');
        console.log('acabou');       
    }
}

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

alert('contagem regressiva');

//variavel para o contador
let contador = prompt('Digite um numero');

//enquanto o contador for maior que zero
while (contador > 0) {
    //imprima o contador autal
    alert(contador)
    //diminui um valor do contador autal
    contador--;
    //mostra no log o valor subtraido
    console.log(contador);

    //se contador for igual a zero
    if (contador === 0 ) {
        //mostra no log o valor atual
        console.log(contador)
        //imprime mensagem
        alert('Contagem chegou ao final');

    }
}


Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

*/

