// vars 
const form = document.querySelector('#request-quote');


// Event

document.addEventListener('DOMContentLoaded', function(){
    // Creating options of year 
    const html = new InsuranceUI()
    html.displayYears();
});

form.addEventListener('submit', addQuote);









// Objects and functions 
function InsuranceUI()
{


}


// proto
InsuranceUI.prototype.displayYears = function()
{
    // Last 20 years 
    const max = new Date().getFullYear(); 
    const min = max - 20; 

    // Generate the year 
    const sYears = document.querySelector('#year');

    for (let i =max; i>=min; i--)
    {
        const opt = document.createElement('option');
        opt.value = i; 
        opt.text = i;
        sYears.appendChild(opt);
    }
}

// Functions 
function addQuote(e)
{
    const country = document.querySelector('#make').value;
    const year = document.querySelector('#year').value;
    const level = document.querySelector('input[name="level"]:checked').value;

    // If empty 
    if(country=='')
    {
      alert('Fill Country');
    }
    else{
        console.log(country,year,level);
    }

   
    e.preventDefault();
}