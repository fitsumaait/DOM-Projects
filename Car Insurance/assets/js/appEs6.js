// Objects and functions 
class Insurance
{
            
        constructor(country, year, level)
        {
            this.country = country;
            this.year = year;
            this.level = level;
        }
            // Proto
            calculatePrice(insurance)
            {
                let price;
                const base = 2000;

                const make = insurance.country;
            switch(make) {
                    case '1': 
                        price = base * 1.15;
                        break;
                    case '2': 
                        price = base * 1.05;
                        break;
                    case '3': 
                        price = base * 1.35;
                        break;
            }

            // Get the year
            const year = insurance.year;

                // Get the years difference
            const difference = this.getYearDifference(year);

            // Each year the cost of the insurance is going to be 3% cheaper
            price = price - ((difference * 3) * price) / 100;
            
            // Check the level of protection
            const level = insurance.level;

            price = this.calculateLevel(price, level);

            return price;

                
            }
            // Returns the difference between years
    getYearDifference(year) {
            return new Date().getFullYear() - year;
        }
        // Adds the value based on the level of protection
        calculateLevel(price, level) {
            /*
                Basic insurance is going to increase the value by 30%
                Complete Insurance is going to increaste the value by 50%
            */
        if(level === 'basic') {
                price = price * 1.30;
        } else {
                price = price * 1.50;
        }

        return price;
        }

}
            
class InsuranceUI
{
    // proto
    displayYears()
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

    // Alert 
    showAlert(message)
    {
        const div = document.createElement('div');
        div.classList = 'error';
        div.innerHTML = `<p>${message}</p>`;

        form.insertBefore(div,document.querySelector('.form-group'));

        //   set timer 
        setTimeout(function(){
            document.querySelector('.error').remove();
        },1000);
    }
    printResults(res,ins)
    { 
        const result = document.querySelector('#result');

        const div = document.createElement('div');

    const val = ins.country === '1'? 'American' : (ins.country === '2'? 'Asia' : 'European');

        div.innerHTML = `
        <p class="header">Summary</p>
        <p>Country : ${val} </p>
        <p>Year : ${ins.year} </p>
        <p>Level : ${ins.level} </p>
        <p class="total">Total Price : ${res}</p>`;

        // loader imag
        const loaderImg = document.querySelector('#loading img');
        loaderImg.style.display = 'block';
        setTimeout(function()
        {
            loaderImg.style.display = 'none';
            result.appendChild(div);
        },2000);

        




    }

    
}
    // vars 
    const form = document.querySelector('#request-quote');
    // Creating options of year 
    const html = new InsuranceUI();

    // Event

    document.addEventListener('DOMContentLoaded', function(){
    
        html.displayYears();
    });

    form.addEventListener('submit', addQuote);
// Functions 
function addQuote(e)
    {
                const country = document.querySelector('#make').value;
                const year = document.querySelector('#year').value;
                const level = document.querySelector('input[name="level"]:checked').value;

                // If empty 
                if(country=='')
                {
                        html.showAlert("Make Sure You Fill All Fields");
                }
                else
                {
                    // clear previous 
                    const prev = document.querySelector('#result div');
                    if(prev)
                    {
                    prev.remove();
                    }
                    const insurance = new Insurance(country, year, level);
                    const price = insurance.calculatePrice(insurance);
                    // console.log(price);
                    html.printResults(price,insurance);
                }

            
                e.preventDefault();
    }

            