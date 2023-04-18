const B_menu = document.getElementById('b_menu');//start burger menu
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
});//finish burger menu

const Slide_prev = document.getElementById('slide-prev');//start slader
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
});// finish slaider

/*const Active2 = document.getElementsByClassName('active2');
console.log(Active2);
const Pop_close = document.getElementById('pop_close');
const Pop_button = document.getElementById('pop_button');
for(let i=0; i<Active2.length; i++){
    Active2[i].addEventListener('click', () => {
        document.getElementById('pop_close').classList.remove('class_close');
    });
}
Pop_button.addEventListener('click', () => {
    document.getElementById('pop_close').classList.add('class_close');
});*/

//start pop up
const jsonText=[
  {"name": "Jennifer",
    "img": "./images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Dog - Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {"name": "Sophia",
    "img": "./images/pets-katrine2.png",
    "type": "Dog",
    "breed": "Dog - Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {"name": "Woody",
    "img": "./images/pets-woody.png",
    "type": "Dog",
    "breed": "Dog - Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {"name": "Scarlett",
    "img": "./images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Dog - Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {"name": "Katrine",
    "img": "./images/pets-katrine.png",
    "type": "Cat",
    "breed": "Cat - British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  { "name": "Timmy",
    "img": "./images/pets-timmy.png",
    "type": "Cat",
    "breed": "Cat - British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {"name": "Freddie",
    "img": "./images/pets-katrine(1).png",
    "type": "Cat",
    "breed": "Cat - British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {"name": "Charly",
    "img": "./images/pets-charly.png",
    "type": "Dog",
    "breed": "Dog - Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
  let test_img = '';
  let text1 = '';
  let text2 = '';
  let text3 = '';
  let text4 = '';
  let text5 = '';
  let text6 = '';
  let text7 = '';
  let Name = '';
  let textArray = [];
  function addText() {
    jsonText.forEach(obj => {
      if(obj.name === Name){
        text_img = `<img id="pop_img" src="${obj.img}" alt="pets-charly">`
        text1 = `<p id="pop_text1">${obj.name}</p>`;
        text2 = `<p id="pop_text2">${obj.breed}</p>`;
        text3 = `<p id="pop_text3">${obj.description}</p>`;
        text4 = `<p id="pop_text4"><b>age: </b>${obj.age}</p>`;
        text5 = `<p id="pop_text5"><b>inoculations: </b>${obj.inoculations}</p>`;
        text6 = `<p id="pop_text6"><b>diseases: </b>${obj.diseases}</p>`;
        text7 = `<p id="pop_text7"><b>parasites: </b>${obj.parasites}</p>`;
      }
    });
    console.log(text_img);
    console.log(text2);
    return textArray;
  }
  
  function open_pop() { 
      document.getElementById('pop_close').classList.remove('class_close');
      pop_content.insertAdjacentHTML("afterbegin", text_img);
      pop_text.insertAdjacentHTML("beforeend", text1);
      pop_text.insertAdjacentHTML("beforeend", text2);
      pop_text.insertAdjacentHTML("beforeend", text3);
      pop_text.insertAdjacentHTML("beforeend", text4);
      pop_text.insertAdjacentHTML("beforeend", text5);
      pop_text.insertAdjacentHTML("beforeend", text6);
      pop_text.insertAdjacentHTML("beforeend", text7);
  }
  
  const Katrine_pop = document.getElementById('Katrine');
  Katrine_pop.addEventListener('click', () => {
    Name = "Katrine";
    addText();
    open_pop();
  })
  const Jennifer_pop = document.getElementById('Jennifer');
  Jennifer_pop.addEventListener('click', () => {
    Name = "Jennifer";
    addText();
    open_pop();
  })
  const Woody_pop = document.getElementById('Woody');
  Woody_pop.addEventListener('click', () => {
    Name = "Woody";
    addText();
    open_pop();
  })
  const Sophia_pop = document.getElementById('Sophia');
  Sophia_pop.addEventListener('click', () => {
    Name = "Sophia";
    addText();
    open_pop();
  })
  const Timmy_pop = document.getElementById('Timmy');
  Timmy_pop.addEventListener('click', () => {
    Name = "Timmy";
    addText();
    open_pop();
  })
  const Charly_pop = document.getElementById('Charly');
  Charly_pop.addEventListener('click', () => {
    Name = "Charly";
    addText();
    open_pop();
  })
  const Scarlett_pop = document.getElementById('Scarlett');
  Scarlett_pop.addEventListener('click', () => {
    Name = "Scarlett";
    addText();
    open_pop();
  })
  const Freddie_pop = document.getElementById('Freddie');
  Freddie_pop.addEventListener('click', () => {
    Name = "Freddie";
    addText();
    open_pop();
  })
    
  const Pop_close = document.getElementById('pop_close');
  const Pop_background = document.getElementById('pop_background');
  const Pop_button = document.getElementById('pop_button');
  const Pop_text = document.getElementById('pop_text');
  /*BASICS.addEventListener('click', () => { //слушаю клик в длоке через ид который привязан к константе
      document.getElementById('ul-block').classList.add('hidden');// добавил класс с дисплей нан
      document.getElementById('on-basics').classList.remove('open-basics');// убрал клас с нан = изменил кнопку
  });*/

  function remove_pop(){
    document.getElementById('pop_close').classList.add('class_close');
      pop_img.remove();
      pop_text1.remove();
      pop_text2.remove();
      pop_text3.remove();
      pop_text4.remove();
      pop_text5.remove();
      pop_text6.remove();
      pop_text7.remove();
  }
  Pop_background.addEventListener('click', () => {
    remove_pop();
  });
  Pop_button.addEventListener('click', () => {
    remove_pop();
  });// finish pop up