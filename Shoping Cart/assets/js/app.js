// Variables 
const courses = document.querySelector('#courses-list');
const shopingcart = document.querySelector('#cart-content tbody');

// Event Listeners 
loadEvenets();

function loadEvenets()
{
     courses.addEventListener('click', addCourse);
     shopingcart.addEventListener('click',removeCourse);



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
  const courseInfo= {
      cImage: course.querySelector('img').src,
      cTitle: course.querySelector('h4').textContent,
      cPrice: course.querySelector('.price span').textContent,
      cId: course.querySelector('a').getAttribute('data-id'),


  }
   addToCart(courseInfo);

}
// Adding to cart for display 
function addToCart(courseInfo)
{
    // create tr 
    const row = document.createElement('tr');

    // Insert values 
    row.innerHTML = `
    <tr>   
    <td>
        <img src="${courseInfo.cImage}" width=100 />
       </td>
       <td>
        ${courseInfo.cPrice}
       </td>
       <td>
       <a href="#" class="remove" data-id="${courseInfo.cId}">X</a>
      </td>
      <tr>
    `;
    shopingcart.appendChild(row);

}

// remove course 
function removeCourse(e)
{
    if(e.target.classList.contains('add-to-cart'))
    {
                e.target.parentElement.parentElement.remove();
    }



}