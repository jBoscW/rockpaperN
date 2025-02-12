
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

// m
function playRound(human, comp) {
    let win;
    
    // capitalize first letter of string
    const humanCapitalized = human[0].toUpperCase() + human.slice(1);
    const compCapitalized = comp[0].toUpperCase() + comp.slice(1);

    // put in screen who won
    if (human !== comp) {
        win = declareWinner(human, comp);
        
        if (win === 1) {
            console.log(`You won! ${humanCapitalized} beats ${compCapitalized}.`)
            humanScore++
        } 
        else {
            console.log(`You lost! ${compCapitalized} beats ${humanCapitalized}.`)
            compScore++
        }
    } else {
        console.log('Tie, play again!')
        win = 0
    }
}

// m
function playGame() {
    let gameOver = false
    const btns = document.querySelectorAll('button')
        
    // make comp choice
    const compC = getComputerChoice();

    // player chooses and play round
    btns.forEach(button => {
        button.addEventListener('click', (choice) => {
            playRound(choice.id, compC);
        });
    });

    // noGames++;

    if (humanScore >= 3) {
        console.log(`Game Over! You won.`);
        console.log(`Games played: ${noGames} \nYour score: ${humanScore} \nComputer Score: ${compScore} `);
        gameOver = true;
    } else if (compScore >= 3) {
        console.log(`Game Over! You lost.`);
        console.log(`Games played: ${noGames} \nYour score: ${humanScore} \nComputer Score: ${compScore} `);
        gameOver = true;
    }
}


let humanScore = 0;
let compScore = 0;

const ROCK_IMG = document.createElement('img');
ROCK_IMG.setAttribute('src', './images/rock.png');

playGame()



