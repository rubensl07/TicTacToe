'use strict'
//Inicializando as variáveis
const casa = [9];
const p = [9];

let turn = 0, jogoAtivo = true, contador = 0, vitoriasX=0, vitoriasO=0,x,o;
//Zerando as posições
function zerar() {
    for (contador = 0; contador < 9; contador++) {
        p[contador] = 0
    }
}


//Importando elementos do HTML
casa[0] = document.getElementById('c1')
casa[1] = document.getElementById('c2')
casa[2] = document.getElementById('c3')
casa[3] = document.getElementById('c4')
casa[4] = document.getElementById('c5')
casa[5] = document.getElementById('c6')
casa[6] = document.getElementById('c7')
casa[7] = document.getElementById('c8')
casa[8] = document.getElementById('c9')
const pontuacao = document.getElementById('pontuacao')
const vez = document.getElementById('vez')
const icone1 = document.getElementById('icone1')
const icone2 = document.getElementById('icone2')
let placarX = document.getElementById('placarX')
let placarO = document.getElementById('placarO')
const esquerdo = document.getElementById('esquerdo')
const direito = document.getElementById('direito')
const botaoReset = document.getElementById('reset')
const ultraReset = document.getElementById('ur')

ultraReset.addEventListener('click', function() {
    const confirmacao = window.confirm("Pressionar esse botão apagará os placares atuais e resetará o jogo.\nEstá certo que deseja continuar?");
    if (confirmacao) {
        location.reload()
    } 
  });


//Atribuindo click as casas
for (contador = 0; contador < 9; contador++) {
    casa[contador].addEventListener('click', (function (casaJogada) {
        return function () {
            jogar(casaJogada)
        }
    })(contador))
}

botaoReset.addEventListener('click', reset)

function jogar(casaJogada) {
    if (p[casaJogada] == 0 && jogoAtivo) {
        if (turn == 1) {
            p[casaJogada] = 1
            alterarVez(turn)
            casa[casaJogada].classList.add('xis')
        } else
            if (turn == 2) {
                p[casaJogada] = 2
                alterarVez(turn)
                casa[casaJogada].classList.add('circulo')
            }
        casa[casaJogada].classList.add('aparecer')
        casa[casaJogada].classList.add('selecionado')
        ValidarVitoria()
    }


}

function alterarVez(vezJogador) {
    if (vezJogador == 1) {
        turn = 2
        vez.textContent = "vez do jogador 2";
        icone1.src = "./icones/circuloBranco.png"
        icone2.src = "./icones/circuloBranco.png"
        pontuacao.classList.remove('vermelho')
        pontuacao.classList.add('azul')


    } else if (vezJogador == 2) {
        turn = 1
        vez.textContent = "vez do jogador 1";
        icone1.src = "./icones/xisBranco.png"
        icone2.src = "./icones/xisBranco.png"
        pontuacao.classList.remove('azul')
        pontuacao.classList.add('vermelho')

    }
}

function ValidarVitoria() {
    if ((p[0] == 1 && p[1] == 1 && p[2] == 1) || (p[3] == 1 && p[4] == 1 && p[5] == 1) || (p[6] == 1 && p[7] == 1 && p[8] == 1) || (p[0] == 1 && p[3] == 1 && p[6] == 1) || (p[1] == 1 && p[4] == 1 && p[7] == 1) || (p[2] == 1 && p[5] == 1 && p[8] == 1) || (p[0] == 1 && p[4] == 1 && p[8] == 1) || (p[2] == 1 && p[4] == 1 && p[6] == 1)) {
        vitoriasX++
        placarX.textContent=vitoriasX.toString()
        placarX.classList.remove('white')
        placarX.classList.add('yellow')
        esquerdo.classList.add('avermelharPlacar')
        vez.textContent = "vitória do jogador 1";
        icone1.src = "./icones/xisBranco.png"
        icone2.src = "./icones/xisBranco.png"
        pontuacao.classList.remove('azul')
        pontuacao.classList.add('vermelho')
        jogoAtivo = false
        console.log("X "+vitoriasX+"\nO "+vitoriasO)
        // setTimeout(()=>{
        //     alert("FIM DE JOGO\nJOGADOR 1 VENCEU")
        // },10)

    } else
        if ((p[0] == 2 && p[1] == 2 && p[2] == 2) || (p[3] == 2 && p[4] == 2 && p[5] == 2) || (p[6] == 2 && p[7] == 2 && p[8] == 2) || (p[0] == 2 && p[3] == 2 && p[6] == 2) || (p[1] == 2 && p[4] == 2 && p[7] == 2) || (p[2] == 2 && p[5] == 2 && p[8] == 2) || (p[0] == 2 && p[4] == 2 && p[8] == 2) || (p[2] == 2 && p[4] == 2 && p[6] == 2)) {
            vitoriasO++
            placarO.textContent=vitoriasO.toString()
            placarO.classList.remove('white')
            placarO.classList.add('yellow')
            direito.classList.add('azularPlacar')
            vez.textContent = "vitória do jogador 2";
            icone1.src = "./icones/circuloBranco.png"
            icone2.src = "./icones/circuloBranco.png"
            pontuacao.classList.remove('vermelho')
            pontuacao.classList.add('azul')
            jogoAtivo = false
            console.log(vitoriasO + " "+vitoriasX)
            // setTimeout(()=>{
            //     alert("FIM DE JOGO\nJOGADOR 2 VENCEU")
            // },10)
        } else
            if (p[0] != 0 && p[1] != 0 && p[2] != 0 && p[3] != 0 && p[4] != 0 && p[5] != 0 && p[6] != 0 && p[7] != 0 && p[8] != 0) {
                vez.textContent = "empate";
                pontuacao.classList.remove('azul')
                icone1.src = ""
                icone2.src = ""
                jogoAtivo = false
                console.log(vitoriasO + " "+vitoriasX)
                // setTimeout(()=>{
                //     alert("FIM DE JOGO\nEMPATE")
                // },10)
            }

}
reset()

function reset() {
    jogoAtivo = true
    zerar()

    for (contador=0; contador < 9; contador++) {
        casa[contador].classList.remove('xis')
        casa[contador].classList.remove('circulo')
        casa[contador].classList.remove('aparecer')
        casa[contador].classList.remove('selecionado')
    }
    vez.textContent = "vez do jogador 1"
    pontuacao.classList.remove('azul')
    pontuacao.classList.add('vermelho')
    icone1.src = "./icones/xisBranco.png"
    icone2.src = "./icones/xisBranco.png"
    turn=1
    esquerdo.classList.remove('avermelharPlacar')
    direito.classList.remove('azularPlacar')

    x = parseInt(placarX.textContent)
    o = parseInt(placarO.textContent)

    if(x>0)
    placarX.classList.add('white')
    if(o>0)
    placarO.classList.add('white')

}
