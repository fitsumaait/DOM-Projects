// Variables ...
const twwitList = document.querySelector('#tweet-list');



// Event Listener 
loadEvents();
function loadEvents()
{
    document.querySelector('#form').addEventListener('submit',addTwitt);
}


// Required Function 

// add twitts 
function addTwitt(e)
{
    // console.log('Form Submited ...');
    // Get the value 
    const twwit = document.querySelector('#tweet').value;
    
    // create li
    const li = document.createElement('li');
    li.textContent = twwit; 
    twwitList.appendChild(li);
    
    
    e.preventDefault();
}