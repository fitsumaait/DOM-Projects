// class 
class Budget{


constructor(budget)
{
     this.budget = Number(budget);
     this.buLeft = this.budget;
}

}
class HTMLUI
{

    // Insert Budget 
    addBudget(amount)
    {
         bugTotal.innerHTML = `${amount}`;
         bugLeft.innerHTML = `${amount}`;
    }
    printMessage(msg, className)
    {
       const messageWraper = document.createElement('div');
       messageWraper.classList.add('text-center','alert',className);
       messageWraper.appendChild(document.createTextNode(msg));

       document.querySelector('.primary').insertBefore(messageWraper,addExpensForm);

       setTimeout(function(){
           document.querySelector('.alert').remove();
       },1000);
    }
}




// variabls 
const addExpensForm = document.querySelector("#add-expense");
const bugTotal = document.querySelector("span#total");
const bugLeft = document.querySelector("span#left");
const html = new HTMLUI();

let budget , userBudget;






// Event Listeners 
loadEventListeners();
function loadEventListeners()
{

  // The Dom Load
    document.addEventListener('DOMContentLoaded',function(){    
           userBudget = prompt('Enter Your Weekly Budget!!');
           if(userBudget === null || userBudget ==='' || userBudget ==='0')
           {
                   window.location.reload();
           }
           else
           {
               budget = new Budget(userBudget);
               html.addBudget(budget.budget);

           }
    });

  //   form 
    addExpensForm.addEventListener('submit',function(e)
    {
        e.preventDefault();500
     const expenseName =  document.querySelector('#expense').value;
     const expenseAmount = document.querySelector('#amount').value;
     if(expenseName === '' || expenseAmount === '')
     {
        html.printMessage('All Fields are Require','alert-danger');
     }
     });
    

}