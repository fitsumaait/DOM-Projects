// Variables ...




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
    console.log('Form Submited ...');
    e.preventDefault();
}