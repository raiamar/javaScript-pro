const colors = ["green" , "red", "blue", "grey", "pink", "orange"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get ramdom number betwn 0 - 3
    const randomNumber = getRandom (); 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber].toUpperCase();

});

function getRandom(){
    return Math.floor (Math.random() * colors.length);
}