let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2} );
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Acertou!');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior ');
        }
        tentativas++;
        limparCampo();
     } 
}      
function gerarNumeroAleatorio(){
   let numeroEscolhiodo = parseInt(Math.random() * 10 + 1 );
   if (listaDeNumerosSorteados.includes(numeroEscolhiodo)){
       return gerarNumeroAleatorio();
       }else {
        listaDeNumerosSorteados.push(numeroEscolhiodo);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhiodo;
       }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
   
}
 function reiniciarJogo(){
 numeroSecreto = gerarNumeroAleatorio();
 limparCampo();
 tentativas = 1;
 mensagemInicial();
 document .getElementById('reiniciar').setAttribute('disabled', true);
 }