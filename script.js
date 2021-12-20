function computerPlay(){
    myArray = ["Rock", "Paper", "Scissors"];
    let x = Math.random();
    x = Math.floor(x * 3);
    return myArray[x]; 
}

function capitalFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound(playerSelection, computerSelection){
    playerSelection = capitalFirstLetter(playerSelection.toLowerCase());
    computerSelection = capitalFirstLetter(computerSelection.toLowerCase());
    if(playerSelection == computerSelection)
        return 0;
    if((playerSelection == "Scissors" && computerSelection == "Paper" ) || (playerSelection == "Paper" && computerSelection == "Rock" ) || (playerSelection == "Rock" && computerSelection == "Scissors"))
        return 1;
    return 2;
}

let human = 0;
let computer = 0;
let gameOver = false;


const tryAgainButton = document.querySelector('#tryAgainButton');
const h = document.querySelector("#human-score");
const c = document.querySelector("#computer-score");
const gameWinnerMessage = document.querySelector('#gameWinnerMessage');
function updateScore(){
    h.textContent = human;
    c.textContent = computer;
    let winner = "";
    if(human == 5 || computer == 5){
        if(human == 5)
            winner = "You are ";
        else
            winner = "Computer is ";
        gameWinnerMessage.textContent = winner + "the winner of the game!";
        tryAgainButton.style.visibility = "visible"; 
        gameOver = true;
    }
}

updateScore();

const container = document.querySelector('#container');
const btns = container.querySelectorAll('button');
const message = document.querySelector("#message");
const playerPick = document.querySelector('#playerPick');
const computerPick = document.querySelector('#computerPick');
btns.forEach(btn => btn.onclick =  (e)=>{
    if(gameOver)
    {
        alert("You must press try again!");
        return;
    }
    let playerSelection = e.target.dataset.key;
    let computerSelection = computerPlay();
    let res = playRound(playerSelection, computerSelection);
    playerPick.src = `${playerSelection}.png`;
    computerPick.src = `${computerSelection}.png`;
    if(res == 1)
    {
        message.textContent = `You won! Computer played ${computerSelection}`;
        human++;
    }
    else if(res == 2)
    {
        message.textContent = `You lost! Computer played ${computerSelection}`;
        computer++;
    }
    else
        message.textContent = `Draw! You both picked ${computerSelection}`;
    updateScore();
});

tryAgainButton.addEventListener("click", function reset(){
    gameOver = false;
    human = 0;
    computer = 0;
    updateScore();
    gameWinnerMessage.textContent = "";
    message.textContent = "";
    tryAgainButton.style.visibility = "hidden";
});