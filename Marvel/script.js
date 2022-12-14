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
},
{
    "picture": "iron.png",
    "name": "Железный человек",
    "activity": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "force": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
},
{
    "picture": "spider.png",
    "name": "Спайдер-мен",
    "activity": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "force": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
},
{
    "picture": "america.png",
    "name": "Капитан Америка",
    "activity": "супер-солдат",
    "friends": "Мстители",
    "force": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
},
{
    "picture": "tor.png",
    "name": "Тор",
    "activity": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "force": "все, что может бог, плюс молот Мьелнир"
},
{
    "picture": "halk.png",
    "name": "Халк",
    "activity": "супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "force": "сверхчеловеческая сила искорость, выносливость, полет"
},
{
    "picture": "chudo.jpg",
    "name": "Чудо-женщина",
    "activity": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "force": "сверхчеловеческая сила и скорость, выносливость, полет"
},
{
    "picture": "black.jpg",
    "name": "Черная вдова",
    "activity": "супергероиня, шпионка",
    "friends": "Мстители",
    "force": "пик человеческого физического потенциала, замедленное старение, знание многих языков"
},
{
    "picture": "pull.webp",
    "name": "Дэдпул",
    "activity": "антигерой, наемник",
    "friends": "частично Мстители, Человек-паук, Росомаха",
    "force": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
}]`;


document.addEventListener("DOMContentLoaded", function(event){
    let heroes = JSON.parse(json);
    console.log(heroes);
    let cardContent = "";
    for (hero of heroes) {
        cardContent += `<div class="card">
        <div><img src="${hero.picture}"/></div>
        <h2><span>${hero.name}</span></h2>
        <div><span>Род деятельности: </span>${hero.activity}</div>
        <div><span>Друзья: </span>${hero.friends}</div>
        <div><span>Суперсила: </span>${hero.force}</div>
        
        <select name="score">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <button onclick='saveScore()'>Поставить оценку</button>
        </div>
        `;}

    
    document.getElementById("inner-container").innerHTML = cardContent;
    
    let select =document.querySelectorAll('select');
    for(i=0; i<heroes.length; i++){
        if (localStorage.getItem(heroes[i].name) != null){
        select[i].value = JSON.parse(localStorage.getItem(heroes[i].name));
    }}
})


function saveScore(){
    let heroes = JSON.parse(json);
    let select =document.querySelectorAll('select');
    for( i=0; i<heroes.length; i++){
        let selectHero= select[i].value;
        localStorage.setItem(heroes[i].name, selectHero);
    }
}


