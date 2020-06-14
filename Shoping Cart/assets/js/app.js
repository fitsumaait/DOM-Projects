// Variables 
const courses = document.querySelector('#courses-list');


// Event Listeners 
loadEvenets();

function loadEvenets()
{
     courses.addEventListener('click', addCourse);



}


// Required functions 

function addCourse(e)
{
      
    if(e.target.classList.contains('add-to-cart'))
    {
        //Read Course Elements 
        const course = e.target.parentElement.parentElement;
        // console.log(course);
        
        // retrive course info 
      getCourseInfo(course);
    }
    
   e.preventDefault();
}

// Retrive course info 
function getCourseInfo(course)
{

}