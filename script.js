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
    })
}

//This is for the middle row
const middleBoard = document.querySelector('.middle-board').children;

for (let i=0; i < middleBoard.length; i++){
    middleBoard[i].addEventListener('click',(e)=>{
        board.middle[i] = "O";
        e.target.textContent = board.middle[i];
    })
}

//This is for the bottom row
const bottomBoard = document.querySelector('.bottom-board').children;

for (let i=0; i < bottomBoard.length; i++){
    bottomBoard[i].addEventListener('click',(e)=>{
        board.bottom[i] = "O";
        e.target.textContent = board.bottom[i];
    })
}