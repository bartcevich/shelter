const B_menu = document.getElementById('b_menu');
const Menu = document.getElementById('menu');
const Burger = document.getElementById('burger');
let active_burger=false;
Burger.addEventListener('click', () => {
    console.log(active_burger);
    if(active_burger==false){
        active_burger=true;
        document.getElementById('b_menu').classList.add('menu_open');
        document.getElementById('menu').classList.add('menu_open2');
        document.getElementById('burger').classList.add('burger_90');
    }else if(active_burger==true){
        active_burger=false;
        document.getElementById('b_menu').classList.remove('menu_open');
        document.getElementById('menu').classList.remove('menu_open2');
        document.getElementById('burger').classList.remove('burger_90');
    }
});
Menu.addEventListener('click', () => {
    
    if(active_burger==false){
        active_burger=true;
        document.getElementById('b_menu').classList.add('menu_open');
        document.getElementById('menu').classList.add('menu_open2');
        document.getElementById('burger').classList.add('burger_90');
    }else if(active_burger==true){
        active_burger=false;
        document.getElementById('b_menu').classList.remove('menu_open');
        document.getElementById('menu').classList.remove('menu_open2');
        document.getElementById('burger').classList.remove('burger_90');
    }
});

const Slide_prev = document.getElementById('slide-prev');
const Slide_next = document.getElementById('slide-next');
const xKatrine = document.getElementById('Katrine');
const xJennifer = document.getElementById('Jennifer');
const xWoody = document.getElementById('Woody');
const xSophia = document.getElementById('Sophia');
const xTimmy = document.getElementById('Timmy');
const xCharly = document.getElementById('Charly');
const xScarlett = document.getElementById('Scarlett');
const xFreddie = document.getElementById('Freddie');

const names=['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];
let prev = [];
let actual = [];
let next = [];
let prevN = 0;
let nextN = 0;
let random = 0;

function carousel() {
    random = Math.ceil(Math.random()*10);
    for (let i = 3; i > 0; i--){
        if(random > 7){random = random - 2;}
        if(random === 0){random = random + 4;
        }else{random = random - 1}
        actual.unshift(names[random]);
    }
    console.log(actual);
    return actual;
}
carousel();
document.getElementById(actual[0]).classList.add('active3');
document.getElementById(actual[1]).classList.add('active4');
document.getElementById(actual[2]).classList.add('active5');

Slide_prev.addEventListener('click', () => {
    document.getElementById(actual[0]).classList.remove('active3');
    document.getElementById(actual[1]).classList.remove('active4');
    document.getElementById(actual[2]).classList.remove('active5');
    nextN += 1;
    next.unshift(...actual);
    if(prevN>0){
        actual.unshift(...prev);
        console.log(actual);
        prevN=0;
    }else{carousel();}
    document.getElementById(actual[0]).classList.add('active3');
    document.getElementById(actual[1]).classList.add('active4');
    document.getElementById(actual[2]).classList.add('active5');
});
Slide_next.addEventListener('click', () => {

    document.getElementById(actual[0]).classList.remove('active3');
    document.getElementById(actual[1]).classList.remove('active4');
    document.getElementById(actual[2]).classList.remove('active5');
    prevN += 1;
    prev.unshift(...actual);
    if(nextN>0){
        actual.unshift(...next);
        console.log(actual);
        nextN=0;
    }else{carousel();}
    document.getElementById(actual[0]).classList.add('active3');
    document.getElementById(actual[1]).classList.add('active4');
    document.getElementById(actual[2]).classList.add('active5');
});

const Active2 = document.getElementsByClassName('active2');
console.log(Active2);
const Pop_close = document.getElementById('pop_close');
const Pop_button = document.getElementById('pop_button');
/*BASICS.addEventListener('click', () => { //слушаю клик в длоке через ид который привязан к константе
    document.getElementById('ul-block').classList.add('hidden');// добавил класс с дисплей нан
    document.getElementById('on-basics').classList.remove('open-basics');// убрал клас с нан = изменил кнопку
});*/
for(let i=0; i<Active2.length; i++){
    Active2[i].addEventListener('click', () => {
        document.getElementById('pop_close').classList.remove('class_close');
    });
}
/*Active2.addEventListener('click', () => {
    console.log(Active2);
    document.getElementById('pop_close').classList.remove('class_close');
});*/
Pop_button.addEventListener('click', () => {
    document.getElementById('pop_close').classList.add('class_close');
});