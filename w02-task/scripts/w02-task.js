/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Edwin Albancando Robles";
const currentYear = "2024";
const profilePicture = "images/Hared.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile Image of ${fullName}")


/* Step 5 - Array */

let favFood= ['BBQ', 'chicken and Rice', 'Pepperoni Pizza', 'Cheescake'];
foodElement.innerHTML += `<br> ${favFood}`;
const f1 = 'burguer';
favFood.push(f1);
foodElement.innerHTML += `<br> ${favFood}`;
favFood.shift();
foodElement.innerHTML +=`<br>${favFood}`;
favFood.pop();
foodElement.innerHTML +=`<br>${favFood}`;











