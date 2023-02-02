function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return choice;
    //0 = rock
    //1 = paper
    //2 = scissors
}

function playRound(player,computer){
    //declarations
    const container = document.querySelector('#results');
    const result = document.createElement('div');
    result.classList.add('result');
    container.appendChild(result);

    //checking who won
    if (computer == 0 && player == "rock"){
        result.textContent = "It's a Tie";
        return 0;
    }
    else if (computer == 0 && player == "paper"){
        result.textContent ="You Win The Round! Paper beats Rock";
        return 1;
    }
    else if (computer == 0 && player == "scissors"){
        result.textContent ="You Lose The Round! Rock beats Scissors";
        return 2;
    }
    else if (computer == 1 && player == "rock"){
        result.textContent ="You Lose The Round! Paper beats Rock";
        return 2;
    }
    else if (computer == 1 && player == "paper"){
        result.textContent ="It's a Tie";
        return 0;
    }
    else if (computer == 1 && player == "scissors"){
        result.textContent ="You Win The Round! Scissors beats Paper";
        return 1;
    }
    else if (computer == 2 && player == "rock"){
        result.textContent ="You Win The Round! Rock beats Scissors";
        return 1;
    }
    else if (computer == 2 && player == "paper"){
        result.textContent ="You Lose The Round! Scissors beat Paper";
        return 2;
    }
    else if (computer == 2 && player == "scissors"){
        result.textContent ="It's a Tie!";
        return 0;
    }

}   

function game(){
    //declarations
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    let computerSelection = getComputerChoice();
    let playerSelection = 'rock';

    //setting up elements
    const container = document.querySelector('#results');
    const show = document.createElement('div');
    show.classList.add('show');
    const final = document.createElement('div');
    final.classList.add('final');
    
    //button events
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 0){
            playerSelection = 'rock';
            
        }else if(button.id == 1){
            playerSelection = 'paper';
        }else if(button.id == 2){
            playerSelection = 'scissors';
        }
        if (playerScore < 5 && computerScore < 5){
            computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
        
            //updating score
            if(result == 1){
                playerScore += 1;
            }else if(result == 2){
                computerScore +=1;
            }
            
            //Once someone wins
            if(computerScore == 5){
                show.textContent ="You Lose... Computer Wins!";
                container.appendChild(show);
            }else if(playerScore == 5){
                show.textContent ="You Win!!!!!";
                container.appendChild(show);
            }
            //displaying score
            final.textContent = "Player: " + playerScore + " Computer: " + computerScore;
            container.appendChild(final);
        }
    
    });
    });
}

game();