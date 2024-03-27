 
  /* alert('Boas-vindas ao jogo do número secreto')

 let chute = prompt('Escolha um número entre 1 e 10')
 let numeroSecreto = 4

 if (chute == numeroSecreto) {
    alert('Acertou')
 }





 /* Desafios {

    Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

    alert('Boas vindas ao qual eh o dia')

let sabado = 'sabado'
let domingo = 'domingo'

let ipunt = prompt('Digite qual eh o dia hoje?')

if ((ipunt == sabado) || (ipunt == domingo)) {
    alert('Feliz final de semana')
} else {
    alert('Contine a trabalhar folgado')
}

    Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

alert('Verificar numero')

let number = prompt('Digite o  numero');

if (number > 0) {
    alert('Numero MAIOR que zero');

}
else if (number < 0) {
    alert('Numero MENOR que zero');

}

else {
    alert('Numero digitado eh zero');
}
    


    Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

    alert('Verificar seua pontuacao')

let pontuacao = prompt('Digite a pontuacao do jogo');

if (pontuacao >= 100) {
    alert('Parabens, voce venceu!!!!');
}
else {
    alert('Parabens, voce Perdeu!!!!');
}

//Codigo para fazer a pagina recarregar assim que finalizar de rodar o codigo//
location.reload();

    Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.


let saldoConta = 500;

// Criando a mensagem usando template string
let mensagem = `Seu saldo atual é de $${saldoConta}.`;

// Exibindo a mensagem para o usuário
alert(mensagem);

    Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

    alert('Digite seu nome')
// Digita o nome
let nome = prompt('Digite o seu nome')

// Variavel com o texto para contatenar com o nome
let mensagem = `Boas vindas ao sistema ${nome}.`;

//Monstar mensagem
alert(mensagem);

*/

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }