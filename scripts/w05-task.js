/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templesElement = document.getElementById('temples');
let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        /*Create an HTML <article> element (createElement).*/
        let article = document.createElement('article');
        /*Create an HTML <h3> element and add the temple's templeName property to this new element.*/
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        /*Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.*/
        let image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', temple.location);
        /*Append the <h3> element and the <img> element to the <article> element as children. (appendChild)*/
        article.appendChild(h3);
        article.appendChild(image);
        /*Append the <article> element to the global templesElement variable*/
        templesElement.appendChild(article);
    });


}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};



/* filterTemples Function */

const filterTemples = () => {
    /*In this function, first call the reset function to clear the output.*/
    reset();
    let filter = document.getElementById('filtered').value;
    let arrayToDisplay;

    switch (filter) {
        case 'utah':
            arrayToDisplay = templeList.filter((temple) => {
                return temple.location.includes('Utah');
            });
            displayTemples(arrayToDisplay);
            break;


        case 'notutah':
            arrayToDisplay = templeList.filter((temple) => {
                return temple.location =! temple.location.includes('Utah');
            });
            displayTemples(arrayToDisplay);

            break;
        case 'older':
            arrayToDisplay = templeList.filter((temple) => {
                return temple.dedicated < "1950, 0, 1";
            });
            displayTemples(arrayToDisplay);

            break;
        case 'all':
            displayTemples(templeList);

            break;
    }

}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList) });