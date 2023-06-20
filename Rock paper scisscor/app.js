const options = document.querySelectorAll(".options")
var playerScore = 0;
var compScore = 0;
var roundCount = 0;
const result = document.getElementById("result");

for (button of options) button.addEventListener("click", playGame);

function playGame(){
        const playerInput = this.innerText;
        const compOptions = ["rock", "paper", "scissors"];
        const compInput = compOptions[Math.floor(Math.random() * 3)];

        compare(playerInput, compInput);
        roundCount++;
        document.getElementById("roundCounter").innerText = roundCount;
        if (checkWinner() === true){
            for (button of options) button.removeEventListener("click", playGame);
            document.getElementById("restartMsg").textContent = "click restart to start again !"
        }
}
function compare(playerInput, compInput){
    if (playerInput === compInput){
        result.innerText = "Draw"
        document.getElementById("player-guess").innerText = playerInput;
        document.getElementById("comp-guess").innerText = compInput;
        return;
    }
    if (playerInput === "rock"){
        if (compInput === "scissors"){
            result.innerText = "You won";
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
        }
        else{
            result.innerText = "computer won";
            compScore++;
            document.getElementById("compScore").textContent = compScore;
        }
        document.getElementById("player-guess").innerText = playerInput;
        document.getElementById("comp-guess").innerText = compInput;
    }
    if (playerInput === "paper"){
        if (compInput === "rock"){
            result.innerText = "You won";
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
        }
        else {
            result.innerText = "computer won";
            compScore++;
            document.getElementById("compScore").textContent = compScore;
        }
        document.getElementById("player-guess").innerText = playerInput;
        document.getElementById("comp-guess").innerText = compInput;
    }
    if (playerInput === "scissors"){
        if (compInput === "paper"){
            result.innerText = "You won";
            playerScore++;
            document.getElementById("playerScore").textContent = playerScore;
        }
        else {
            result.innerText = "computer won";
            compScore++;
            document.getElementById("compScore").textContent = compScore;
        }
        document.getElementById("player-guess").innerText = playerInput;
        document.getElementById("comp-guess").innerText = compInput;
    }
}
function checkWinner(){
    let winner = document.getElementById("roundWinner");
    let currentPlayerScore = Number(document.getElementById("playerScore").textContent);
    let currentCompScore = Number(document.getElementById("compScore").textContent);

    if (currentPlayerScore === 3){
        winner.textContent = "Player Won the Round";
        return true;
    }
    if (currentCompScore === 3){
        winner.textContent = "Computer Won the Round";
        return true;
    }
}
