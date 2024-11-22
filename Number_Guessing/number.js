function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function startGame() {
    const targetNumber = getRandomNumber(1, 100);
    let attempts = 10;
    let guessedCorrectly = false;
  
    console.log("Welcome to the number guessing game!");
  
    while (attempts > 0 && !guessedCorrectly) {
        const userGuess = prompt(`Enter a number between 1 and 100. Attempts left: ${attempts}`);
        
        
        if (!userGuess || isNaN(userGuess)) {
            alert("Invalid input, please enter a number.");
            continue;
          }
  
          const numGuess = parseInt(userGuess, 10);
  
         
          if (numGuess < 1 || numGuess > 100) {
              alert("Please enter a number between 1 and 100.");
              continue;
          }
          
  
          if (numGuess === targetNumber) {
              alert(`Congratulations! You guessed the number ${targetNumber} correctly.`);
              guessedCorrectly = true;
          } else if (numGuess < targetNumber) {
              alert("Too low! Try a higher number.");
          } else {
              alert("Too high! Try a lower number.");
          }
  
          attempts--;
      }
  
      
      if (!guessedCorrectly) {
          alert(`Sorry, you've run out of attempts. The correct number was ${targetNumber}.`);
      }
  
      console.log("Thank you for playing!");
  }
  