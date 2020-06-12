// Define UI Variables 
const taskInput = document.querySelector('#task');      //the task input text field
const form = document.querySelector('#task-form');        //The form at the top
const filter = document.querySelector('#filter');      //the task filter text field
const taskList = document.querySelector('.collection');   //The UL
const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

// Loading the event listenr 
loadEventListeners();



function loadEventListeners()
{
    // DOM load event 
    document.addEventListener('DOMContentLoaded', loadTasksfromDB);

    form.addEventListener('submit', addNewTask);
    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);
      // Clear All Tasks
      clearBtn.addEventListener('click', clearAllTasks);
    //   Filter Task 
    filter.addEventListener('keyup', filterTasks);
}


function addNewTask(e)
{
    // Check empty entry
if(taskInput.value === '')
{
     alert('Enter New Task');
     return;
}

// Create an li element when the user adds a task 
const li = document.createElement('li');
// Adding a class
li.className = 'collection-item';
// Create text node and append it 
li.appendChild(document.createTextNode(taskInput.value));
// Create new element for the link 
const link = document.createElement('a');
// Add clas and the x marker for a 
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"> </i>';
// Append link to li
li.appendChild(link);
// Append to UL 
taskList.appendChild(li);

//Add to DB [Local Storage ...]
addToDatabase(taskInput.value);
taskInput.value = '';
e.preventDefault();
}

// Remove Task function defination 
function removeTask(e)
{
if(e.target.parentElement.classList.contains('delete-item'))
{
   if(confirm('Are You Sure about that ?'))
    e.target.parentElement.parentElement.remove();
}


}

// Clear Task Function defination 
function clearAllTasks()
{
    // taskList.innerHTML = '';      This is the first way    
   while(taskList.firstChild)
   {
      taskList.removeChild(taskList.firstChild);
   }

}

// Filte tasks function defination 
function filterTasks(e)
{
const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach(function(task){
const item = task.firstChild.textContent;
if(item.toLocaleLowerCase().indexOf(text)!= -1){
     task.style.display = 'block';
}
else{
    task.style.display = 'none';
}

});

}

// Add to LocalStorage function declaration 
function addToDatabase(newTask)
{
   let listofTasks;
   if(localStorage.getItem('tasks') == null)
   {
       listofTasks = [];
   }
   else
   {
       listofTasks = JSON.parse(localStorage.getItem('tasks'));
   }
    listofTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listofTasks));


}

// Load task 
function loadTasksfromDB()
{
    let listofTasks;
    if(localStorage.getItem('tasks') == null)
    {
        listofTasks = [];
    }
    else
    {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    listofTasks.forEach(function(eachTask)
    {

// Create an li element when the user adds a task 
const li = document.createElement('li');
// Adding a class
li.className = 'collection-item';
// Create text node and append it 
li.appendChild(document.createTextNode(eachTask));
// Create new element for the link 
const link = document.createElement('a');
// Add clas and the x marker for a 
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"> </i>';
// Append link to li
li.appendChild(link);
// Append to UL 
taskList.appendChild(li);
    });


}