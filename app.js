alert('Boas vindas ao jogo do número secreto');

let chute;
let tentativas = 0;
let numeroSecreto = Math.floor((Math.random()*10)+1);

//enquanto chute nao for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    tentativas++;

    //informa no console o numero secreto e a tentativa atual
    console.log(`Número secreto: ${numeroSecreto}`);
    console.log(`Tentativas: ${tentativas}`);

    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
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