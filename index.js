// create a function called getComputerChoice that randomly returns rock, paper, or scissors 

function getComputerChoice () {
   let computerSelection; 
   computerSelection = Math.ceil(Math.random()*3); 
    if (computerSelection == 1){
        return ("rock")
    }
    else if (computerSelection == 2) {
        return ("paper")
    }
    else { 
        return ("scissors") 
    }

}

let losses = 0; 
let wins = 0;
let ties= 0; 

document.getElementById("submitButton").onclick = function () { 
  

    let userSelection = document.getElementById ("userInput").value; 

    let computerChoice = getComputerChoice(); 


        if (userSelection == "rock" && computerChoice == "paper") {
        losses += 1; 
        }

        else if (userSelection == "rock" && computerChoice == "scissors") {
        wins += 1; 
        }

        else if (userSelection == "scissors" && computerChoice == "paper") {
        wins += 1; 
        }

        else if (userSelection == "scissors" && computerChoice == "rock") {
        losses += 1;   
        }        

        else if (userSelection == "paper" && computerChoice == "scissors") {
        wins += 1; 
        }

        else if (userSelection == "paper" && computerChoice == "rock") {
        losses += 1; 
        }                

        else if (userSelection == computerChoice) { 
        ties += 1; 
        }

        else  {
            alert ("must enter either rock, paper, or scissors")
    
        }
    
    console.log(userSelection)
    console.log(computerChoice)
    console.log(wins)
    console.log(losses)
    console.log(ties)


document.getElementById("winCounter").innerHTML = (`${wins}`); 

document.getElementById("lossesCounter").innerHTML = (`${losses}`)

document.getElementById("tiesCounter").innerHTML = (`${ties}`)

    }


