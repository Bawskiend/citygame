'use strict'
let allcities = ['Абаза','Абакан','Абдулино','Абинск','Агрыз','Баймак','Белёв','Белогорск','Белозерск','Бердск','Велиж','Вельск','Верхнеуральск','Видное','Владикавказ','Гатчина','Горнозаводск','Глазов','Гвардейск','Гагарин'];
let cities = [];
let field   = document.querySelector('.field');
let message = document.querySelector('.message');
let text = document.querySelector('.text')
field.addEventListener('keydown',function(event){
    console.log(cities);
    let enteredcityname = field.value;
    if(event.code == 'Enter' && field.value.length > 0){
        if(cities.length == 0){
            cities.push(enteredcityname[0].toUpperCase() + enteredcityname.substr(1));
            botscity(enteredcityname[0].toUpperCase() + enteredcityname.substr(1));
            field.value = '';
                    }
        else if(enteredcityname[0].toLowerCase() == cities[cities.length-1].substr(-1)){
            if(CheckCity(enteredcityname[0].toUpperCase() + enteredcityname.substr(1))){
                cities.push(enteredcityname[0].toUpperCase() + enteredcityname.substr(1));
                botscity(enteredcityname[0].toUpperCase() + enteredcityname.substr(1));
            field.value = '';
            }
            else if(!CheckCity(enteredcityname[0].toUpperCase() + enteredcityname.substr(1))){
                alert('Такой город уже вводился')
            }
        }
        else if(enteredcityname[0].toLowerCase() != cities[cities.length-1].substr(-1)){
            alert('Нужно ввести город название которого начинается на последнюю букву предыдущего города')
        }
    }
})
function CheckCity(cityname){
    for(let city of cities){
        if(city === cityname){
            return false;
        }
        else{
            return true;
        }
    }
}
function botscity(enteredcityname){
    let citiesarray = [];
    console.log(allcities);
    for(let elem of allcities){
        console.log(elem);
        if(enteredcityname[enteredcityname.length-1].toLowerCase() == elem[0].toLowerCase() && enteredcityname[0].toLowerCase() + enteredcityname.substr(1) != elem[0].toLowerCase() + elem.substr(1)){
            citiesarray.push(elem);
        }
        if(allcities.indexOf(enteredcityname) >= 0){
            allcities.splice(allcities.indexOf(enteredcityname),1)
        }
    }
    let randomcity = citiesarray[randomInteger(0,citiesarray.length-1)];
    console.log(allcities);
    console.log(randomcity);
    console.log(citiesarray);
    allcities.splice(allcities.indexOf(randomcity),1)
    allcities.splice(allcities.indexOf(enteredcityname),1)
    
    cities.push(randomcity)
    return text.innerHTML = 'Город: ' + randomcity;
    
}
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }