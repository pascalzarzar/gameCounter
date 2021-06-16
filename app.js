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

//inicializamos variables de control para los puntajes y cantidad de rondas a jugar
let gamesCount = 1;
let player1Score = 0;
let player2Score = 0;

const disableButtons = () => {
    player1Point.disabled = true;
    player2Point.disabled = true;
};

const verifyWinner = (player1, player2) => {
    if (gamesCount === player1) {
        result.innerHTML = 'Player 1 is the winner!';
        player1DomScore.classList.add('win');
        player2DomScore.classList.add('lose');
        disableButtons();
    } else if (gamesCount === player2) {
        result.innerHTML = 'Player 2 is the winner!';
        player2DomScore.classList.add('win');
        player1DomScore.classList.add('lose');
        disableButtons();
    }  
};

const resetValues = () => {
    result.innerHTML = '';
    player1DomScore.innerHTML = 0;
    player2DomScore.innerHTML = 0;
    player1Score = 0;
    player2Score = 0;
    player1Point.disabled = false;
    player2Point.disabled = false;
};

const resetGame = (player1,player2) => {
    if (gamesCount === player1){
        player1DomScore.classList.remove('win');
        player2DomScore.classList.remove('lose');
    } else if (gamesCount === player2) {
        player2DomScore.classList.remove('win');
        player1DomScore.classList.remove('lose');
    }
    gamesCount = 1;
    gamesSelector.value = 1;
    resetValues();
};

//Escuchamos los cambios que se ejecutan en el select y reseteamos los puntajes
gamesSelector.addEventListener('change', () => {
    gamesCount = parseInt(gamesSelector.value);
    resetValues();
});

//Escuchamos el botón que le asigna puntaje al player 1 y validamos si se cumple la condición para ganar el juego.
player1Point.addEventListener('click', () => {
    player1DomScore.innerHTML++;
    player1Score++;
    verifyWinner(player1Score, player2Score);
});

//Escuchamos el botón que le asigna puntaje al player 2 y validamos si se cumple la condición para ganar el juego.
player2Point.addEventListener('click', () => {
    player2DomScore.innerHTML++;
    player2Score++;
    verifyWinner(player1Score, player2Score);
});

//Escuchamos el botón para resetear el contador y todas las variables implicadas.
reset.addEventListener('click', () => {
    resetGame(player1Score,player2Score);
});