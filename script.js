let board = {   upper:[0,0,0],
                middle:[0,0,0],
                bottom:[0,0,0],
            };
//I will first put 6 buttons.
//Let me get all the buttons first.

//This is for the upper row
const upperBoard = document.querySelector('.upper-board').children;

for (let i=0; i < upperBoard.length; i++){
    upperBoard[i].addEventListener('click',(e)=>{
        board.upper[i] = "O";
        e.target.textContent = board.upper[i];
        checkWinner();
        window.setTimeout(AIplay,1000);
    })
}

//This is for the middle row
const middleBoard = document.querySelector('.middle-board').children;

for (let i=0; i < middleBoard.length; i++){
    middleBoard[i].addEventListener('click',(e)=>{
        board.middle[i] = "O";
        e.target.textContent = board.middle[i];
        checkWinner();
        window.setTimeout(AIplay,1000);
    })
}

//This is for the bottom row
const bottomBoard = document.querySelector('.bottom-board').children;

for (let i=0; i < bottomBoard.length; i++){
    bottomBoard[i].addEventListener('click',(e)=>{
        board.bottom[i] = "O";
        e.target.textContent = board.bottom[i];
        checkWinner();
        window.setTimeout(AIplay,1000);
    })
}

//Now let's get the player and AI buttons.
const playerButton = document.querySelector('.playerButton');
const AIButton = document.querySelector('.AIButton');
playerButton.addEventListener('click',()=>{
    alert("YOO");
});
AIButton.addEventListener('click',()=>{
    window.setTimeout(AIplay,1000);
})

//This is for enemy move.
function AIplay() {

    //I will iterate through the board array,
    //and check if the value is 0.
    //and if it's 0, I will add the row and column to the
    //new list
    let choices = [];

    let keys = Object.keys(board);
    for (const key of keys) {
        for (let i=0; i < board[key].length; i++){
            if (board[key][i] === 0){
                
                choices.push([key,i]);
                
            }
        }
    }

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    let randomElement = getRandomElement(choices);
    let index = choices.indexOf(randomElement);
    
    //This is where I change the board. Change the value to "X"
    board[randomElement[0]][randomElement[1]] = "X";
    //And add 'X' to the DOM board.
    let location = 0;

    if (randomElement[0] === 'upper') {
        location = upperBoard;
    } else if (randomElement[0] === 'middle') {
        location = middleBoard;
    } else {
        location = bottomBoard;
    }
    //e.target.textContent = board.upper[i];
    location[randomElement[1]].textContent = board[randomElement[0]][randomElement[1]];
    
    choices.splice(index,1);
    
    checkWinner();
}

function checkWinner(){
    if (board.upper[0] === board.upper[1] &&
        board.upper[1] === board.upper[2]){
            if (board.upper[0] === "O") {alert("YOU WON!"); reset();}
            else if (board.upper[0] === "X") {alert("AI WON!"); reset();}
    } else if (board.middle[0] === board.middle[1] &&
        board.middle[1] === board.middle[2]){
            if (board.middle[0] === "O") {alert("YOU WON!"); reset();}
            else if (board.upper[0] === "X") {alert("AI WON!"); reset();}
    } else if (board.bottom[0] === board.bottom[1] &&
        board.bottom[1] === board.bottom[2]){
            if (board.bottom[0] === "O") {alert("YOU WON!"); reset();}
            else if (board.bottom[0] === "X") {alert("AI WON!"); reset();}
    } else if (board.upper[0] === board.middle[1] &&
        board.middle[1] === board.bottom[2]){
            if (board.upper[0] === "O") {alert("YOU WON!"); reset();}
            else if (board.upper[0] === "X") {alert("AI WON!"); reset();}
    } else if (board.bottom[0] === board.middle[1] &&
        board.middle[1] === board.upper[2]){
            if (board.bottom[0] === "O") {alert("YOU WON!"); reset();}
            else if (board.bottom[0] === "X") {alert("AI WON!"); reset();}
    } else if (board.upper[0] === board.middle[0] &&
        board.middle[0] === board.bottom[0]){
            if (board.upper[0] === "O") {alert("YOU WON!"); reset();}
            else if (board.upper[0] === "X") {alert("AI WON!"); reset();}
    } else if (board.upper[1] === board.middle[1] &&
        board.middle[1] === board.bottom[1]){
            if (board.upper[1] === "O") {alert("YOU WON!"); reset();}
            else if (board.upper[1] === "X") {alert("AI WON!"); reset();}
    } else if (board.upper[2] === board.middle[2] &&
        board.middle[2] === board.bottom[2]){
            if (board.upper[2] === "O") {alert("YOU WON!"); reset();}
            else if (board.upper[2] === "X") {alert("AI WON!"); reset();}
    }
}

//This is where I reset everything if the game ends.
function reset() {
    //first I need to reset the board.
    board = {upper:[0,0,0],
             middle:[0,0,0],
             bottom:[0,0,0],
    };

    //const upperBoard = document.querySelector('.upper-board').children;

    for (let i=0; i < upperBoard.length; i++){
        upperBoard[i].textContent = '';
    }
    
    for (let i=0; i < middleBoard.length; i++){
        middleBoard[i].textContent = '';
    }

    for (let i=0; i < bottomBoard.length; i++){
        bottomBoard[i].textContent = '';
    }
}
