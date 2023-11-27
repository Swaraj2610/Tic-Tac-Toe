let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let win = document.getElementById('win');


function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        updateCell(index);
        checkWinner();
        togglePlayer();
    }
}

function updateCell(index) {
    const cell = document.getElementsByClassName('cell')[index];
    cell.textContent = gameBoard[index];
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            announceWinner(gameBoard[a]);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        announceDraw();
    }
}


function announceWinner(winner) {
    gameActive = false;
    win.textContent = `${winner} wins!`;
}

function announceDraw() {
    gameActive = false;
    win.textContent = "It's a Draw!";
}
