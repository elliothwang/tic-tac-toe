// if anyone sees this, sorry for basically copying shaw's solution; not proud of it but was really going through it bad w this
//  i dont even want to submit this to be honest

// ===== constants ===== //
let turnLookUp = {
    "null" : null,
    "1" : "url('data:image/jpeg;base64,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')",
    "-1" : "url('https://media.istockphoto.com/vectors/red-cross-mark-drawn-grunge-x-in-vector-vector-id1175729985?k=6&m=1175729985&s=612x612&w=0&h=F93m3QT3w2XmBiG6PeT7TnGn7ftKA7dSql7B6o1Nc5U=')",
}

let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// ===== variables ===== //
let board, turn, winner;

// ===== elements ===== //
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset');
const containerEl = document.getElementById('container');

// ===== event listeners ===== //
containerEl.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);

// ===== functions ===== //
function init () {
    // resetting the board by hard-coding the board's nested arrays
    board = new Array(9).fill(null);
    turn = 1;
    winner = null;
    // invoke render function
    render();
}

function handleClick (evt) {
    if (board[evt.target.id]) return;
    if (winner) return;
    board[evt.target.id] = turn;
    checkForWin();
    turn *= -1;
    render();
}


function checkForWin() {
    winningCombos.forEach(function(combo) {
      if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
        winner = turn;
      } 
    })
    if (!winner && !board.includes(null)) winner = 'T';
};


function render () {
// render board
    // iterate over board array
    board.forEach(function (square, index) {
        // reassign div background color to turnLookUp values
        document.getElementById(index).style.backgroundImage = turnLookUp[square];
    });
    resetBtn.style.display = 'none';

// render messages
        // if winner = "T" message
        if (winner === 'T') {
            messageEl.textContent = "Scratch!";
            resetBtn.style.display = 'block';
        }
        // if (winner) message
        else if (winner) {
            // assign turn value of -1 to player 1; turn value of 1 to player 2
            messageEl.innerHTML = `Player ${(turn < 0) ? 1 : 2} Wins!`;
            resetBtn.style.display = 'block';
        }
        // else, play on message
        else {
            messageEl.innerHTML = `Player ${(turn < 0) ? 1 : 2}'s Turn`;
        } 
}

init();