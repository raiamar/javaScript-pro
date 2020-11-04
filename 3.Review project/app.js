//local reviews data 

const reviews = [
    {
        id : 1,
        name : "Prem Raj",
        job : "teacher",
        img : "person-1.png",
        text : 
        "I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips.It's better with both kinds.",
    },

    {
        id : 2,
        name : "Reyasha",
        job : "Model",
        img : "2.jpg",
        text : 
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quidem nesciunt exercitationem ipsam. Velit fugit iusto aut! Nostrum, necessitatibus nemo cum veniam itaque animi reiciendis dolores nobis inventore ducimus! Eum.",
    },
    {
        id : 3,
        name : "Swesh",
        job : "Doctor",
        img : "1.jpg",
        text : 
        "I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips.It's better with both kinds.",
    },

];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function (){
   showPerson(currentItem);
});


function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

//show next person 
nextBtn.addEventListener('click', function(){
    currentItem ++;
    if (currentItem > reviews.length -1){
        currentItem  = 0;
    }
    showPerson(currentItem);
});

//show prev person 
prevBtn.addEventListener('click', function(){
    currentItem --;
    if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});

//show random
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

