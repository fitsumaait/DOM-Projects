// Game varibles 
let min = 1, max =10 , winNumber = 2 , guessLeft = 3;

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

// Defining the function 
function gussNumber()
{
    let val = parseInt(guessInput.value);
    
    if(isNaN(val) || val < min || val > max)
    {
        msg.textContent = `Enter a Number B/n ${min} and ${max}`;
    }
    else
    {
        alert('It is Ok');
    }
   
}