// class 
class Budget{


constructor(budget)
{
     this.budget = Number(budget);
     this.buLeft = this.budget;
}
    
   dedueBudget(amount)
   {
         return this.buLeft -=amount;
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
           addExpensForm.reset();

       },1000);
    }
//   display expenst to ul
    addExpensToList(name, amount)
    {
        const list = document.querySelector('#expenses ul');

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        li.innerHTML = ` 
          ${name}
          <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;

        list.appendChild(li);

    }

    // Tracker 
    trackBudget(amount)
    {
         const budLeft = budget.dedueBudget(amount);
         bugLeft.innerHTML = `${budLeft}`;

         if((budget.budget/4) > budLeft)
         {
        //    add and remove class 
          bugLeft.parentElement.parentElement.classList.remove('alert-success','alert-warning');
          bugLeft.parentElement.parentElement.classList.add('alert-danger');
         }
         else if((budget.budget/2) > budLeft)
         {
        //    add class 
           //    add and remove class 
           bugLeft.parentElement.parentElement.classList.remove('alert-success');
           bugLeft.parentElement.parentElement.classList.add('alert-warning');
        
         }
        
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
        e.preventDefault();4
     const expenseName =  document.querySelector('#expense').value;
     const expenseAmount = document.querySelector('#amount').value;
     if(expenseName === '' || expenseAmount === '')
     {
        html.printMessage('All Fields are Require','alert-danger');
     }
     else
     {
         html.addExpensToList(expenseName,expenseAmount);
         html.trackBudget(expenseAmount);
         html.printMessage('Successfully Added','alert-success');
     }
     });
    

}