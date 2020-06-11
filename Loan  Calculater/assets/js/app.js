//Adding Ev List to the calc button
document.querySelector('#form-sub').addEventListener('submit', calculateLoan);
//Defining the cal method 

function calculateLoan(e)
{
    'use strict';
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
    }
    else
    {
      console.log('Somthing wrong....');
    }
 
  e.preventDefault();
}
