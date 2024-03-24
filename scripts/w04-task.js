/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myprofile = {
    name: "Hared Albancando Robles",
    photo: "images/Hared.jpg",
    favoriteFoods: [
        'BBQ', 
        ' Chicken and Rice', 
        ' Pepperoni Pizza', 
        ' Cheescake', 
        ' Empanadas'
    ],
    hobbies: [
        'Read',
        'Play Soccer',
        'Play videogames',
        'Hiking',
        'Listen to music',
        'Watch movies',
        'Walk with my dogs'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myprofile.placesLived.push(
    {
        place: "Bogota, Colombia",
        lenght: "20 years"
    }
);

myprofile.placesLived.push(
    {
        place: "Murray, UT",
        lenght: "1 year"
    }
);


myprofile.placesLived.push(
    {
        place: "Santa Maria, Brazil",
        lenght: "2 years"
    }
);


myprofile.placesLived.push(
    {
        place: "Idaho falls, ID",
        lenght: "2 years"
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myprofile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute("src", myprofile.photo);
document.querySelector('#photo').setAttribute("alt", myprofile.name);

/* Favorite Foods List*/

myprofile.favoriteFoods.forEach(food=>{
    const li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});



/* Hobbies List */

myprofile.hobbies.forEach(hobby=>{
    const ul = document.createElement('li');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});


/* Places Lived DataList */

myprofile.placesLived.forEach(places =>{
    const dt = document.createElement('dt');
    dt.textContent = places.place;
    const dd = document.createElement('dd');
    dd.textContent = places.lenght;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    });




