let json = `[{
    "picture": "batmen.png",
    "name": "Бэтмен",
    "activity": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "force": "интеллект, обширные познания, знания боевых искусств, ловкость"
},
{
    "picture": "superman.jpg",
    "name": "Супермен",
    "activity": "борец за справедливость",
    "friends": "собака Крипто",
    "force": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
}


]`;


document.addEventListener("DOMContentLoaded", function(event){
    let heroes = JSON.parse(json);
    console.log(heroes);
    let cardContent = "";
    let hero;
    for (hero of heroes) {
        cardContent += `<div class="card">
        <div><img src="${hero.picture}"/></div>
        <h2>${hero.name}</h2>
        <div>Род деятельности: ${hero.activity}</div>
        <div>Друзья: ${hero.friends}</div>
        <div>Суперсила: ${hero.force}</div>
        </div>`;
    };

    document.getElementById("inner-container").innerHTML = cardContent;


});


// {
//     "name":
//     "activity":
//     "friends":
//     "force":
// }
// {
//     "name":
//     "activity":
//     "friends":
//     "force":
// }