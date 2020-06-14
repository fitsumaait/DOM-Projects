// Variables 
const courses = document.querySelector('#courses-list');
const shopingcart = document.querySelector('#cart-content tbody');
const clearShopingcart = document.querySelector('#clear-cart');
// Event Listeners 
loadEvenets();

function loadEvenets()
{
     courses.addEventListener('click', addCourse);
     shopingcart.addEventListener('click',removeCourse);
     clearShopingcart.addEventListener('click',clearCart);
     document.addEventListener('DOMContentLoaded', loadFromDB);

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

    addToDatabse(courseInfo);

}

// remove course 
function removeCourse(e)
{
    let course, courseId;
    if(e.target.classList.contains('remove'))
    {

       e.target.parentElement.parentElement.remove();
       course = e.target.parentElement.parentElement;
       courseId = course.querySelector('a').getAttribute('data-id');
    }

    // remove from DB 
    removeCourseFromDB(courseId);



}

// clear all cart 
function clearCart(e)
{
//    Clear with html but not recomended 
//   shopingcart.innerHTML = '';
// with first child 
  while(shopingcart.firstChild)
  {
      shopingcart.removeChild(shopingcart.firstChild);    
  }

//   clear from DB
 clearFromDB();


}

// Databse Related fun // 
// Retrive from storage 
function retriveFromDb()
{
    let allCourses;
    if(localStorage.getItem('courses') === null)
    {
        allCourses = [];
    }
    else{
        allCourses = JSON.parse(localStorage.getItem('courses'));
    }
    return allCourses;
}

// add to storage 
function addToDatabse(course)
{
    let courses =  retriveFromDb();

    // add 
    courses.push(course);

    localStorage.setItem('courses',JSON.stringify(courses));
}

// Load from storage 
function loadFromDB()
{
   let courseList = retriveFromDb();

//    add to the chart 
   courseList.forEach(element => {
    // create tr 
    const row = document.createElement('tr');

    // Insert values 
    row.innerHTML = `
    <tr>   
    <td>
        <img src="${element.cImage}" width=100 />
       </td>
       <td>
        ${element.cPrice}
       </td>
       <td>
       <a href="#" class="remove" data-id="${element.cId}">X</a>
      </td>
      <tr>
    `;
    shopingcart.appendChild(row);
   });

}


// clear from local storage 
function clearFromDB()
{
    localStorage.clear();
}

// remove from local storage 
function removeCourseFromDB(id)
{
  let coursesList = retriveFromDb();


  coursesList.forEach(function(c,i)
  {
          if(c.cId === id)
          {
                coursesList.splice(i,1);
          }
  });
  localStorage.setItem('courses',JSON.stringify(coursesList));
}