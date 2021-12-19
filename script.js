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
    if((playerSelection == "Scissors" && computerSelection == "Paper" ) || (playerSelection == "Paper" && computerSelection == "Rock" ) || (playerSelection == "Paper" && computerSelection == "Rock"))
        return 1;
    return 2;
}

function game(){
    let player = 0;
    let computer = 0;
    for(let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter play (Rock, Paper, Scissors): ");
        while(playerSelection.toUpperCase() != "ROCK" && playerSelection.toUpperCase() != "PAPER" && playerSelection.toUpperCase() != "SCISSORS"){
            console.log("Error! Please enter valid input: ");
            playerSelection = prompt("Enter play (Rock, Paper, Scissors): ");
        }
        let res = playRound(playerSelection, computerSelection);
        if(res == 1)
        {
            console.log("You win! " + playerSelection + " Beats " + computerSelection + ".");
            player++;
        }
        else if (res == 2)
        {
            computer++;
            console.log("You lose! " + computerSelection + " Beats " + playerSelection+ ".");
        }
        else{
            console.log("Draw! You both picked " + playerSelection + ".")
        }
    }
    console.log("Player: " + player);
    console.log("Computer: " + computer);
    if(player > computer)
        console.log("You win!");
    else if(player < computer){
        console.log("Computer wins!");
    }
    else
        console.log('Draw!');
}

game()