// Variables ...
const twwitList = document.querySelector('#tweet-list');



// Event Listener 
loadEvents();
function loadEvents()
{
    // add
    document.querySelector('#form').addEventListener('submit',addTwitt);
    
    // remove 
    twwitList.addEventListener('click',removeTwitt);

    // Dom load 
    document.addEventListener('DOMContentLoaded',loadTwitts);

}


// Required Function 

// add twitts 
function addTwitt(e)
{
    // console.log('Form Submited ...');
    // Get the value 
    const twwit = document.querySelector('#tweet').value;
    
    // Remove button 
    const rmBtn= document.createElement('a');
    rmBtn.classList = 'remove-tweet';
    rmBtn.textContent = 'X';
    // create li
    const li = document.createElement('li');
    li.textContent = twwit;

    li.appendChild(rmBtn);

    twwitList.appendChild(li);
    
    // store 
    addToStorage(twwit);
    e.preventDefault();
}

// remove twiits
function removeTwitt(e)
{
     if(e.target.classList.contains('remove-tweet'))
     {
       e.target.parentElement.remove();
     }


}

// Add to storage 
function addToStorage(tw)
{
   let twitts;
   if(localStorage.getItem('tweets')===null)
   {
       twitts = [];
   }
   else
   {
      twitts = JSON.parse(localStorage.getItem('tweets'));
   
    }
    twitts.push(tw);

    localStorage.setItem('tweets',JSON.stringify(twitts));
}

function loadTwitts()
{
    let twitts;
    if(localStorage.getItem('tweets')===null)
    {
        twitts = [];
    }
    else
    {
       twitts = JSON.parse(localStorage.getItem('tweets'));
    
     }

     twitts.forEach(element => 
        {
    
    // Remove button 
    const rmBtn= document.createElement('a');
    rmBtn.classList = 'remove-tweet';
    rmBtn.textContent = 'X';
    // create li
    const li = document.createElement('li');
    li.textContent = element;

    li.appendChild(rmBtn);

    twwitList.appendChild(li);
        }
     );
}