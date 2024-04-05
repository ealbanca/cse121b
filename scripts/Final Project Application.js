/* W05: Programming Tasks */

/* Declare and initialize global variables */

let jobsElement = document.getElementById('jobs');
let jobList = [];


/* async displayTemples Function */

const displayJobs = (jobs) => {
    jobs.forEach((job) => {
        /*Create an HTML <article> element (createElement).*/
        let btn = document.createElement('button');

        /*Create an HTML <h3> element and add the temple's templeName property to this new element.*/
        let h3 = document.createElement('h3');
        h3.textContent = job.jobTitle;
        /*Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.*/
        let companyName = document.createElement('company');
        companyName.textContent = job.company;

        let jobLocation = document.createElement('location');
        jobLocation.textContent = job.location;

        let jobSalary = document.createElement('salary');
        jobSalary.textContent = `$ ${job.salary}`;

        let jobLink = document.createElement('joburl');
        jobLink = job.jobUrl;

        btn.addEventListener('click', () => { window.open(jobLink) });


        /*Append the <h3> element and the <img> element to the <article> element as children. (appendChild)*/
        btn.appendChild(h3);
        btn.appendChild(companyName);
        btn.appendChild(jobLocation);
        btn.appendChild(jobSalary);

        /*Append the <article> element to the global templesElement variable*/
        jobsElement.appendChild(btn);
    });
}

/* async getTemples Function using fetch()*/
const getJobs = async () => {
    const response = await fetch(src = "joblist.json");
    jobList = await response.json();
    displayJobs(jobList);
}

/* reset Function */

const reset = () => {
    jobsElement.innerHTML = "";
};



/* filterTemples Function */

const filterJobsByTitle = () => {
    /*In this function, first call the reset function to clear the output.*/
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

const filterJobsBySalary = () => {
    /*In this function, first call the reset function to clear the output.*/
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


const filterJobsByLocation = () => {
    /*In this function, first call the reset function to clear the output.*/
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

getJobs();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterJobsByTitle(jobList) });

document.querySelector('#filtered2').addEventListener('change', () => { filterJobsBySalary(jobList) });

document.querySelector('#filtered3').addEventListener('change', () => { filterJobsByLocation(jobList) });
