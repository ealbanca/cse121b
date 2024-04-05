/* Final Project- Edwin Hared Albancando Robles*/

/* Declare and initialize global variables */

let jobsElement = document.getElementById('jobs');
let jobList = [];


/* async displayJobs Function */

const displayJobs = (jobs) => {
    jobs.forEach((job) => {
        /*Create an HTML <article> element (createElement).*/
        let btn = document.createElement('button');

        /*Create HTML elements and add the properties to them from the json file.*/
        let h3 = document.createElement('h3');
        h3.textContent = job.jobTitle;
        
        let companyName = document.createElement('company');
        companyName.textContent = job.company;

        let jobLocation = document.createElement('location');
        jobLocation.textContent = job.location;

        let jobSalary = document.createElement('salary');
        jobSalary.textContent = `$ ${job.salary}`;

        let jobLink = document.createElement('joburl');
        jobLink = job.jobUrl;

        /*Added EventListener to the button*/
        btn.addEventListener('click', () => { window.open(jobLink) });


        /*Append all the Job elements to the button*/
        btn.appendChild(h3);
        btn.appendChild(companyName);
        btn.appendChild(jobLocation);
        btn.appendChild(jobSalary);

        /*Append the buton element to the global jobsElement variable*/
        jobsElement.appendChild(btn);
    });
}

/* async getJobs Function using fetch()*/
const getJobs = async () => {
    const response = await fetch(src = "joblist.json");
    jobList = await response.json();
    displayJobs(jobList);
}

/* reset Function */

const reset = () => {
    jobsElement.innerHTML = "";
};


/* filterJobsByTitle function with specified cases */

const filterJobsByTitle = () => {

    reset();
    let filter = document.getElementById('filtered').value;
    let arrayToDisplay;

    switch (filter) {
        case 'manager':
            arrayToDisplay = jobList.filter((job) => {
                return job.jobTitle.includes('Manager');
            });
            displayJobs(arrayToDisplay);
            break;

        case 'developer':
            arrayToDisplay = jobList.filter((job) => {
                return job.jobTitle.includes('Developer');
            });
            displayJobs(arrayToDisplay);

            break;

        case 'engineer':
            arrayToDisplay = jobList.filter((job) => {
                return job.jobTitle.includes('Engineer');
            });
            displayJobs(arrayToDisplay);

            break;

        case 'all':
            displayJobs(jobList);

            break;
    }

}


/* filterJobsBySalary function with specified cases */

const filterJobsBySalary = () => {
    
    reset();
    let filter2 = document.getElementById('filtered2').value;
    let arrayToDisplay;

    switch (filter2) {
        case '50000':
            arrayToDisplay = jobList.filter((job) => {
                return job.salary < 75000;
            });
            displayJobs(arrayToDisplay);
            break;

        case '75000':
            arrayToDisplay = jobList.filter((job) => {
                return job.salary >= 75000 & job.salary <= 100000;
            });
            displayJobs(arrayToDisplay);

            break;

        case 'more':
            arrayToDisplay = jobList.filter((job) => {
                return job.salary > 100000;
            });
            displayJobs(arrayToDisplay);

            break;

        case 'all':
            displayJobs(jobList);

            break;
    }

}


/* filterJobsByLocation function with specified cases */
const filterJobsByLocation = () => {
    
    reset();
    let filter3 = document.getElementById('filtered3').value;
    let arrayToDisplay;

    switch (filter3) {
        case 'FL':
            arrayToDisplay = jobList.filter((job) => {
                return job.location. includes("FL");
            });
            displayJobs(arrayToDisplay);
            break;

        case 'GA':
            arrayToDisplay = jobList.filter((job) => {
                return job.location.includes("GA");
            });
            displayJobs(arrayToDisplay);

            break;

        case 'NC':
            arrayToDisplay = jobList.filter((job) => {
                return job.location.includes("NC");
            });
            displayJobs(arrayToDisplay);

            break;

        case 'NY':
            arrayToDisplay = jobList.filter((job) => {
                return job.location.includes("NY");
            });
            displayJobs(arrayToDisplay);

            break;

        case 'all':
            displayJobs(jobList);

            break;
    }

}

/*called getJobs function to display all jobs*/
getJobs();

/* Defined Event Listeners for every filter button */
document.querySelector('#filtered').addEventListener('change', () => { filterJobsByTitle(jobList) });

document.querySelector('#filtered2').addEventListener('change', () => { filterJobsBySalary(jobList) });

document.querySelector('#filtered3').addEventListener('change', () => { filterJobsByLocation(jobList) });
