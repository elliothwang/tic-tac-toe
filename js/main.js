// ===== Minimum Requirements ===== //
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.


// 1) Define required constants
let colorLookUp = {
    "0" : "white",
    // 
    "1" : "green",
    "-1" : "red"
}

// 2) Define required variables used to track the state of the game
let board, turn, winner;


// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
let msgEl = document.getElementById("msg");
let replayButton = document.querySelector("button");
let boardEls = [...document.querySelectorAll("board > div")];


// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// event listeners
document.querySelector("div").addEventListener("click", handleClick);
replayButton.addEventListener("click", init);

// 5) Handle a player clicking a square

function handleClick (evt) {
    let columnIndex = boardEls.indexOf(evt.target);
        if (columnIndex === -1 || winner) return;

    let columnArr = board[columnIndex];

    let rowIndex = columnArr.indexOf(0);
        if (rowIndex === -1) return;

        columnArr[rowIndex] = turn;
        turn *= -1;
        // winner = getWinner();


    render();
}

// function getWinner () {
//     let winner = null;
//     for (let columnIndex = 0; columnIndex <= 3; columnIndex++) {
//         winner = checkForWin(columnIndex);
//         if (winner) break;
//     }

//     return winner;
// }

// function checkForWin (columnIndex) {
//     let columnArr = board[columnIndex];
//     for (let rowIndex = 0; rowIndex < columnArr.length; rowIndex++) {
//         let winner = checkUp(columnArr, rowIndex) || checkRight(columnArr, rowIndex);
//         if (winner) return winner;
//     }
// }

// function checkUp (columnArr, rowIndex) {
//     // boundary check
//     if (rowIndex > 2) return null;


// }

// function checkRight (columnIndex, rowIndex) {
//     // boundary check
// }


// 6) Handle a player clicking the replay button

init();

function init () {
    // resetting the board by hard-coding the board's nested arrays
    board = [
        [0,0,0], // row 2
        [0,0,0], // row 1
        [0,0,0], // row 0
    ];
    
    turn = 1;
    winner = null;
    // invoke render function
    render();
}

function render () {
    // render board

    // iterate over board arrays
    board.forEach(function (columnArr, columnIndex) {
        // iterate over column arrys to access cell values
        columnArr.forEach(function(cellVal, rowIndex) {
            // select the correct div fot this cellVal
            let div = document.getElementById(`c${columnIndex}r${rowIndex}`);
            // reassign div background color to colorLookUp values
            div.style.backgroundColor = colorLookUp[cellVal];
        });
    });

    // // render messages
    //     // if winner = "T" message
    //     if (winner === "T") {
    //         msgEl.textContent = "Scratch!";
    //     }

    //     // if (winner) message
    //     if (winner) {
    //         msgEl.innerHTML = `<span style="color: ${colorLookUp[winner]}">${colorLookUp[winner].toUpperCase()}</span> Wins!`;
    //         replayButton.style.visibility = visible;
    //     }

    //     // else, play on message
    //     else {
    //         msgEl.innerHTML = `<span style="color: ${colorLookUp[turn]}">${colorLookUp[turn].toUpperCase()}'s</span> Turn`;
    //     }
}