export default class Game {
    constructor() {
        this.xScore = 0;
        this.oScore = 0;
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }
// show who's turn it is
    makeMove(i) {
        if (!this.isInProgress()) {
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;

        if (!this.findWinningCombination()) {
            this.nextTurn();
        }
    }
// checking combonations
    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }

    isInProgress() {
        return !this.findWinningCombination() && this.board.includes(null);
    }
    // save score in localstorage
    save(){
        localStorage.setItem("xScore",this.xScore); 
        localStorage.setItem("oScore",this.oScore); 
    }

    // add X and O score +1
    incrementXScore() {
        this.xScore ++;
    }
    incrementOScore() {
        this.oScore ++;
    }
    // get localstorage
    getScore(){
        localStorage.getItem("xScore",this.xScore); 
        localStorage.getItem("oScore",this.oScore);
    }
}