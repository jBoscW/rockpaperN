
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "scissors"
    } else if (choice === 3) {
        return "paper"
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Make a valid choice: Rock, Paper, & Scissors")
        choice = choice.toLowerCase()

        if (choice === 'rock'|| choice === 'scissors' || choice === 'paper') {
            console.log(choice)
            return choice
        } else {
            console.log("Make a valid choice!")
        }
    }
}

// returns 1 if human wins, 2 if computer
function declareWinner(human, comp) {
    // don't have to check for tie bc check is in playRound function
    if (human === 'rock' || comp === 'rock') {
        if (human === 'scissors' || comp === 'scissors') {
            return human === 'rock' ? 1 : 2;
        
        } else if (human === 'paper' || comp === 'paper'){
            return human === 'rock' ? 2 : 1;
        }
    // necessarily, one played paper and the other scissors
    } else {
        return human === 'scissors' ? 1 : 2;
    }
}


function playRound(human, comp) {
    let win;
    const human2 = human[0].toUpperCase() + human.slice(1);
    const comp2 = comp[0].toUpperCase() + comp.slice(1);

    if (human != comp) {
        win = declareWinner(human, comp);
        
        if (win === 1) {
            console.log(`You won! ${human2} beats ${comp2}.`)
            humanScore++
        } 
        else {
            console.log(`You lost! ${comp2} beats ${human2}.`)
            computerScore++
        }
    } else {
        console.log('Tie, play again!')
        win = 0
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let gameOver = false, noGames = 0;
    
    while (!gameOver) {
        const compC = getComputerChoice();
        // console.log(compC)
        const humanC = getHumanChoice();

        playRound(humanC, compC);
        noGames++;

        if (humanScore >= 3) {
            console.log(`Game Over! You won.`);
            console.log(`Games played: ${noGames} \nYour score: ${humanScore} \nComputer Score: ${computerScore} `);
            gameOver = true;
        } else if (computerScore >= 3) {
            console.log(`Game Over! You lost.`);
            console.log(`Games played: ${noGames} \nYour score: ${humanScore} \nComputer Score: ${computerScore} `);
            gameOver = true;
        }
    }
}

playGame()

