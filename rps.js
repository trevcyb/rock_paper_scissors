function computerPlay() {
    let rps = ["rock","paper","scissors"];
    let computerSelection = rps[Math.floor(Math.random() * rps.length)];
        return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "rock":
                console.log("Draw!")
                return 0;
            case "paper":
                console.log("You lose! Paper beats Rock!")
                return 'pc';
            case "scissors":
                console.log("You Win! Rock beats Scissors!")
                return 'player';
        }
    } else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "rock":
                console.log("You Win! Paper beats Rock!")
                return 'player';
            case "paper":
                console.log("Draw!")
                return 0;
            case "scissors":
                console.log("You Lose! Scissors beats Paper!")
                return 'pc';
        }
    } else if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                console.log("You lose! Rock beats Scissors!")
                return 'pc';
            case "paper":
                console.log("You Win! Scissors beats Paper!")
                return 'player';
            case "scissors":
                console.log("Draw!")
                return 0;
        }
    }
}


function game() {
    let playerscore = 0;
    let pcscore = 0;

    for(let i = 1; i <= 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection;

        do {
            prompt("Type rock, paper or scissors:").toLowerCase;
        } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")

        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case 'pc':
                pcscore++;
                break
            case 'player':
                playerscore++;
                break
            default:
                break
        }
    }
    if(playerscore > pcscore) {
        console.log("PLAYER WINS!!")
    } else if(pcscore > playerscore) {
        console.log("PLAYER LOSE!!")
    } else {
        console.log("DRAW!!!")
    }
}

game()