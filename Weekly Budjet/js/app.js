// class 
class Budget{


constructor(budget)
{
     this.budget = Number(budget);
     this.buLeft = this.budget;
}

}





// variabls 
const addExpensForm = document.querySelector("#add-expense");

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
           }
    });

  //   form 
    addExpensForm.addEventListener('submit',function(e){

    e.preventDefault();
     });

}