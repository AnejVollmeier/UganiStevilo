const playerchoise = document.getElementById("playerDisplay");
const computerchoice = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let computerChoice = Math.floor(Math.random() * 10) + 1;

function game() {
  const playerchoice = parseInt(document.getElementById("playerchoice").value);
  let result = "";

  if (playerchoice === computerChoice) {
    result = "Čestitke! Uganili ste!";
    computerchoice.innerHTML = `RAČUNALNIK : ${computerChoice}`;
    setTimeout(() => {
      if (confirm("Želite igrati ponovno?")) {
        resetGame();
      }
    }, 1000);
  } else {
    if (playerchoice < computerChoice) {
      result = "Preveč nizko! Poskusite višje število!";
    } else if (playerchoice > computerChoice) {
      result = "Preveč visoko! Poskusite nižje število!";
    }
  }

  playerchoise.innerHTML = `TVOJA IZBIRA : ${playerchoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case "Čestitke! Uganili ste!":
      resultDisplay.style.color = "green";
      break;
    case "Preveč nizko! Poskusite višje število!":
      resultDisplay.style.color = "red";
      break;
    case "Preveč visoko! Poskusite nižje število!":
      resultDisplay.style.color = "red";
      break;
  }
}

function resetGame() {
  computerChoice = Math.floor(Math.random() * 10) + 1;
  playerchoise.innerHTML = "TVOJA IZBIRA : ";
  computerchoice.innerHTML = "RAČUNALNIK : ???";
  resultDisplay.textContent = "";
  resultDisplay.style.color = "black";
  document.getElementById("playerchoice").value = "";
}

computerchoice.innerHTML = `RAČUNALNIK : ???`;
