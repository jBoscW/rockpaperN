

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "scissors";
    } else if (choice === 3) {
        return "paper";
    }
}

function getHumanChoice() {
    switch (prompt("Choose one option plsss!!")) {

    }

}

console.log(getComputerChoice())