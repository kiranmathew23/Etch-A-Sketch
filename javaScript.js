let color = "black";
let click = true;

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    let amount = size *size
    for (let i =0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
    }

}
let content = document.querySelector('.content');
let messageBox = document.createElement('div');
messageBox.textContent = "";
content.appendChild(messageBox); 

populateBoard(16);

function changeSize (input) {
    if (input > 0 && input< 100){
        populateBoard(input);
        messageBox.textContent = "";
    }
    else{
        messageBox.textContent = "Must enter a number between 1 - 100";
    }
    
}
function colorSquare() {
    if(click) {
        if (color=== "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
   
}
function changeColor (choice) {
    color = choice;
}

function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "blue");
}

document.querySelector('.board').addEventListener('click', () => {
    click = !click;
});