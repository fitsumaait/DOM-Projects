// Game varibles 
let min = 1, max =10 , winNumber = Math.floor(Math.random()*(max-min+1)+min) , guessLeft = 3;

// UI variables 
const game = document.querySelector('#game');
const minNumber = document.querySelector('.min');
const maxNumber = document.querySelector('.max');
const guessInput = document.querySelector('#gInput');
const guessBtn = document.querySelector('#gvalue');
const msg = document.querySelector('.msg');

// Assigning the values of Numbers 
minNumber.textContent = min;
maxNumber.textContent = max;

// Even Listen in btn 
guessBtn.addEventListener('click',gussNumber);
// For Play again
game.addEventListener('mousedown',function(e){

  if(e.target.className === 'playAgain')
  {
      window.location.reload();
  }
          

});
// Defining the function 
function gussNumber()
{
    let val = parseInt(guessInput.value);
    
    if(isNaN(val) || val < min || val > max)
    {
        msg.textContent = `Enter a Number B/n ${min} and ${max}`;
    }
    
    else if(val === winNumber)
    {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        msg.style.color = 'green';
        msg.textContent = `You Won the Game...`;
        guessInput.value = '';
        playAgain();
    }
    else
    {
         guessLeft -= 1;
         
         if(guessLeft === 0)
         {
            guessInput.disabled = true;
            guessInput.style.borderColor = 'green';
            msg.style.color = 'purple';
            msg.textContent = `Game Over , the wining nummber is ${winNumber}`;
            guessInput.value = '';
            playAgain();
         }
         else
         {
            msg.style.color = 'red';
            guessInput.value = '';
            msg.textContent = `Guss Not Correct , Guess Left : ${guessLeft}`;

         }





    }
   
}
function playAgain()
{
    guessBtn.value = 'Play Again'
    guessBtn.className = 'playAgain';
}