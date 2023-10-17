alert('Boas vindas ao jogo do número secreto');

let chute;
let tentativas = 0;
let numeroMinimo = prompt('Escolha o menor número do intervalo');
let numeroMaximo = prompt('Escolha o maior número do intervalo');
let min = Math.ceil(numeroMinimo);
let max = Math.floor(numeroMaximo);
let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;

//enquanto chute nao for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${min} e ${max}`);

    while (chute < min || chute > max) {
        chute = prompt(`Chute inválido! Escolha um número entre ${min} e ${max}`);
    }

    tentativas++;

    //informa no console o numero secreto, tentativas e intervalo de valores sorteados
    console.log(`Número secreto: ${numeroSecreto}`);
    console.log(`Tentativas: ${tentativas}`);
    console.log(`Intervalo: ${min} a ${max}`);

    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }

        //limpa console para nova tentativa
        console.clear();
    }
}

let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`);