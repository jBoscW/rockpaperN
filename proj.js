
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

// creates win message and removes one before if exists
function createDiv(text, nodeBefore) {
    let div = document.querySelector(".info")
    if (!div) {
        div = document.createElement('div');
        div.classList.add('.info');
    }

    div.textContent = text;
    nodeBefore.after(div);
}

// m
function playRound(human, comp) {
    const imagesDiv = document.querySelector('.images');
    
    if (human !== comp) {
        // capitalize first letter of string
        const humanCapitalized = human[0].toUpperCase() + human.slice(1);
        const compCapitalized = comp[0].toUpperCase() + comp.slice(1);
        
        // display who won with Capitalizeds
        const win = declareWinner(human, comp);

        if (win === 1) {
            const winMsg = `You won! ${humanCapitalized} beats ${compCapitalized}.`;
            createDiv(winMsg, imagesDiv);
            humanScore++;
        } 
        else {
            const loseMsg = `You lost! ${compCapitalized} beats ${humanCapitalized}.`;
            createDiv(loseMsg, imagesDiv);
            compScore++;
        }
    } else {
        const msgTie = 'Tie! Play again.';
        createDiv(msgTie, imagesDiv);
    }
    
    // // player chooses and play round
    // if (humanScore >= 3) {
    //     console.log(`Game Over! You won.`);
    //     console.log(`Games played: ${noGames} \nYour score: ${humanScore} \nComputer Score: ${compScore} `);
    //     gameOver = true;
    // };
};

// creating vars
let humanScore = 0;
let compScore = 0;
let noGames = 0;


// building logic for button events, and playing round
const btns = document.querySelectorAll('button')

btns.forEach(button => {
    button.addEventListener('click', () => {
        const compC = getComputerChoice();
        const humanC = button.id;
        playRound(humanC, compC);
    });
});



const ROCK_IMG = document.createElement('img');
ROCK_IMG.setAttribute('src', './images/rock.png');


