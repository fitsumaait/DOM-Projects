//Adding Ev List to the calc button
document.querySelector('#form-sub').addEventListener('submit', function(e)
{
  // Show the loader and prevent the result
  document.querySelector('#load').style.display = 'block';
  document.querySelector('#result').style.display = 'none';
  
  setTimeout(calculateLoan,2000);


  e.preventDefault();
});
//Defining the cal method 

function calculateLoan()
{   
   
    // Get UI Variables 
    const amount = document.getElementById('amount');
    const interest = document.querySelector('#interest');
    const year = document.querySelector('#year');
    const monthlyPayment = document.querySelector('#mp');
    const totalPayment = document.querySelector('#tp');
    const totalInterest = document.querySelector('#ti');

    // Calculations 
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment = parseFloat(year.value)*12;

    // Monthly payment
    const cs = Math.pow(1+calculatedInterest, calculatedPayment);
    const monthly = (principal*cs*calculatedInterest)/(cs-1);

    if(isFinite(monthly))
    {
     monthlyPayment.value = monthly.toFixed(2);
     totalPayment.value = (monthly*calculatedPayment).toFixed(2);
     totalInterest.value = ((monthly*calculatedPayment) - principal).toFixed(2);
     // Show the result and prevent the loader
   document.querySelector('#load').style.display = 'none';
   document.querySelector('#result').style.display = 'block';
    }
    else
    {
     displayErrorPopup();
    }
}

function displayErrorPopup()
{

  document.querySelector('#load').style.display = 'none';
  document.querySelector('#result').style.display = 'none';
  // Create an error div 
  const errdiv = document.createElement('div');
  // Class of error from bootstrap 
  errdiv.className = 'alert alert-danger';
// Append text node 
errdiv.appendChild(document.createTextNode('Check you Numbers..'));

// Lets grab the card and header 
const card = document.querySelector('.card');
const heading = document.querySelector('.header');

card.insertBefore(errdiv,heading);

// Clear after 3 sec 
setTimeout(function(){
  document.querySelector('.alert').remove();
},3000);








}
