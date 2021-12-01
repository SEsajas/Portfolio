import Game from "./Game.js";
import GameView from "./GameView.js";


let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions
gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
};

gameView.update(game);
//add X score
const addXButton = document.querySelector(".add-x-btn");
addXButton.addEventListener("click", () => {
    console.log("add x score");
    game.incrementXScore()
    game.save();
});
 //add O score
const addOButton = document.querySelector(".add-o-btn");
addOButton.addEventListener("click", () => {
    console.log("add o score");
    game.incrementOScore()
    game.save();
});
// show score in localstorage
const scorecheck = document.querySelector(".scoreCheck");
scorecheck.addEventListener("click", () => {
    console.log(localStorage);
    alert(`X score: ${localStorage.getItem(`xScore`)} O score: ${localStorage.getItem(`oScore`)}`)

});
const deleteScoreButton = document.querySelector(".delete-score");
// remover localstorage score
deleteScoreButton.addEventListener("click", () => {
    localStorage.removeItem(`xScore`)
    localStorage.removeItem(`oScore`)
    console.log(localStorage);
    

});
let players = [];
const addPlayerButton = document.querySelector('.add-player-button');
// add player + check amount of players
addPlayerButton.addEventListener("click", ()=>{
    let playerName = document.querySelector('.inputfield-player-name').value;
    let player = {
        name: playerName,
    };
    if(players.length == 2){
        alert(`You already have 2 players`)
    }else{
        players.push(player);
    }
    printPlayers();
});
const deletePlayerButton = document.querySelector('.delete-player-button');
// delete last player
deletePlayerButton.addEventListener("click", ()=>{
        players.pop();
    
        printPlayers();
});

const showDisplay = document.querySelector('.display');
// show players on screen
function printPlayers() {
    showDisplay.innerHTML = "";

    for(let i = 0; i < players.length; i++) {
        const p = players[i];
        showDisplay.innerHTML +=`Player ${i+1}: ${p.name}  <br>`;
    }
}
window.onload =  game.getScore();