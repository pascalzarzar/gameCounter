//seleccionamos los spans que tienen el puntaje de cada jugador
const player1DomScore = document.querySelector('#player1Score');
const player2DomScore = document.querySelector('#player2Score');

//seleccionamos el h2 que nos indica el resultado del juego
const result = document.querySelector('#result');

//seleccionamos el select que tiene la cantidad de juegos a jugar 
const gamesSelector = document.querySelector('#gamesCount');

//seleccionamos los botones que permiten sumar puntos y resetear el juego
const player1Point = document.querySelector('#player1Point');
const player2Point = document.querySelector('#player2Point');
const reset = document.querySelector('#reset');

let gamesCount = 1;
let player1Score = 0;
let player2Score = 0;

gamesSelector.addEventListener('change', () => {
    gamesCount = parseInt(gamesSelector.value);
    player1DomScore.innerHTML = 0;
    player2DomScore.innerHTML = 0;
    player1Score = 0;
    player2Score = 0;
});

player1Point.addEventListener('click', () => {
    player1DomScore.innerHTML++;
    player1Score++
    if (gamesCount === player1Score) {
        result.innerHTML = 'Player 1 is the winner!'
        player1DomScore.classList.add('win');
        player2DomScore.classList.add('lose');
        player1Point.disabled = true;
        player2Point.disabled = true;
    }
});

player2Point.addEventListener('click', () => {
    player2DomScore.innerHTML++;
    player2Score++
    if (gamesCount === player2Score) {
        result.innerHTML = 'Player 2 is the winner!'
        player2DomScore.classList.add('win');
        player1DomScore.classList.add('lose');
        player1Point.disabled = true;
        player2Point.disabled = true;
    }
});

reset.addEventListener('click', () => {
    if (gamesCount === player1Score){
        player1DomScore.classList.remove('win');
        player2DomScore.classList.remove('lose');
    } else if (gamesCount === player2Score) {
        player2DomScore.classList.remove('win');
        player1DomScore.classList.remove('lose');
    }
    result.innerHTML = ''
    player1DomScore.innerHTML = 0;
    player2DomScore.innerHTML = 0;
    player1Score = 0;
    player2Score = 0;
    gamesCount = 1;
    gamesSelector.value = 1;
    player1Point.disabled = false;
    player2Point.disabled = false;
});