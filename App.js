import React, { useState } from 'react';

function RockPaperScissors() {

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);


  const choices = ['rock', 'paper', 'scissors'];

  
  function generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  function determineWinner(user, computer) {
    if (user === computer) {
      return 'It\'s a tie';
    }
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')) {
      return 'You win';
    }
    return 'Computer wins!';
  }


  function playGame(choice) {
    const computer = generateComputerChoice();
    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(determineWinner(choice, computer));
  }

  return (
    <div>
      <h2>Rock, Paper, Scissors for SOFTWARE DEV 2</h2>
      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      <div>
        {userChoice && <p>Your choice: {userChoice}</p>}
        {computerChoice && <p>Computer's choice: {computerChoice}</p>}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default RockPaperScissors;
