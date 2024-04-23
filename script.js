const buttons = document.querySelectorAll('button');

const resultDiv = document.getElementById('result');

const playAgainButton = document.getElementById('play-again');

let userScore = 0;

let computerScore = 0;

buttons.forEach(button => {

    button.addEventListener('click', () => {

        const userChoice = button.id;

        const computerChoice = getComputerChoice();

        const result = getResult(userChoice, computerChoice);

        updateScore(result);

        displayResult(userChoice, computerChoice, result);

    });

});

function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];

}

function getResult(user, computer) {

    if (user === computer) {

        return 'It\'s a tie! 👊';

    } else if ((user === 'rock' && computer === 'scissors') ||

               (user === 'paper' && computer === 'rock') ||

               (user === 'scissors' && computer === 'paper')) {

        userScore++;

        return 'You win! 🎉';

    } else {

        computerScore++;

        return 'You lose! 👎';

    }

}

function displayResult(user, computer, result) {

    resultDiv.innerHTML = `You chose ${user}. Computer chose ${computer}. ${result}<br>

                          User Score: ${userScore} | Computer Score: ${computerScore}`;

    playAgainButton.style.display = 'block';

    playAgainButton.addEventListener('click', () => {

        resultDiv.innerHTML = '';

        playAgainButton.style.display = 'none';

    });

}

function updateScore(result) {

    if (result.includes('win')) {

        userScore++;

    } else if (result.includes('lose')) {

        computerScore++;

    }

}