'use strict'
//Inicializando as variáveis
const casa = [9];
const interior = [9];
const p = [9];
let vitoria = 0, turn = 1, jogoAtivo = true, contador = 0;
//Zerando as posições
for (contador = 0; contador < 9; contador++) {
    p[contador] = 0
}

//Importando elementos do HTML
casa[0] = document.getElementById('c1')
interior[0] = document.getElementById('in1')

casa[1] = document.getElementById('c2')
interior[1] = document.getElementById('in2')

casa[2] = document.getElementById('c3')
interior[2] = document.getElementById('in3')

casa[3] = document.getElementById('c4')
interior[3] = document.getElementById('in4')

casa[4] = document.getElementById('c5')
interior[4] = document.getElementById('in5')

casa[5] = document.getElementById('c6')
interior[5] = document.getElementById('in6')

casa[6] = document.getElementById('c7')
interior[6] = document.getElementById('in7')

casa[7] = document.getElementById('c8')
interior[7] = document.getElementById('in8')

casa[8] = document.getElementById('c9')
interior[8] = document.getElementById('in9')

//Atribuindo click as casas
for (contador = 0; contador < 9; contador++) {
    casa[contador].addEventListener('click', (function (casaJogada) {
        return function () {
            jogar(casaJogada)
        }
    })(contador))
}

function jogar(casaJogada) {
    if (p[casaJogada] == 0 && jogoAtivo) {
        if (turn == 1) {
            p[casaJogada] = 1
            turn = 2
            interior[casaJogada].classList.add('xis')
        } else
            if (turn == 2) {
                p[casaJogada] = 2
                turn = 1
                interior[casaJogada].classList.add('circulo')
            }
        casa[casaJogada].classList.add('selecionado')
    }
    ValidarVitoria()
}

function ValidarVitoria() {
    if ((p[0] == 1 && p[1] == 1 && p[2] == 1) || (p[3] == 1 && p[4] == 1 && p[5] == 1) || (p[6] == 1 && p[7] == 1 && p[8] == 1) || (p[0] == 1 && p[3] == 1 && p[6] == 1) || (p[1] == 1 && p[4] == 1 && p[7] == 1) || (p[2] == 1 && p[5] == 1 && p[8] == 1) || (p[0] == 1 && p[4] == 1 && p[8] == 1) || (p[2] == 1 && p[4] == 1 && p[6] == 1)) {
        alert("FIM DE JOGO\nJOGADOR 1 VENCEU")
        jogoAtivo = false
    } else
        if ((p[0] == 2 && p[1] == 2 && p[2] == 2) || (p[3] == 2 && p[4] == 2 && p[5] == 2) || (p[6] == 2 && p[7] == 2 && p[8] == 2) || (p[0] == 2 && p[3] == 2 && p[6] == 2) || (p[1] == 2 && p[4] == 2 && p[7] == 2) || (p[2] == 2 && p[5] == 2 && p[8] == 2) || (p[0] == 2 && p[4] == 2 && p[8] == 2) || (p[2] == 2 && p[4] == 2 && p[6] == 2)) {
            alert("FIM DE JOGO\nJOGADOR 2 VENCEU")
            jogoAtivo = false
        } else
            if (p[0] != 0 && p[1] != 0 && p[2] != 0 && p[3] != 0 && p[4] != 0 && p[5] != 0 && p[6] != 0 && p[7] != 0 && p[8] != 0) {
                alert("FIM DE JOGO\nEMPATE")
                jogoAtivo = false
            }
}



