// vars 



// Event

document.addEventListener('DOMContentLoaded', function(){
    // Creating options of year 
    const html = new InsuranceUI()
    html.displayYears();
});









// Objects and functions 
function InsuranceUI()
{


}


// proto
InsuranceUI.prototype.displayYears = function()
{
    // Last 20 years 
    const max = new Date().getFullYear(); 
    const min = max - 20; 

    // Generate the year 
    const sYears = document.querySelector('#year');

    for (let i =max; i>=min; i--)
    {
        const opt = document.createElement('option');
        opt.value = i; 
        opt.text = i;
        sYears.appendChild(opt);
    }
}

