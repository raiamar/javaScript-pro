//set initial count 
let count= 0;


//select valu and button 

const value = document.getElementById('value');
const button= document.querySelectorAll(".btn");  


button.forEach(function (btn){
btn.addEventListener('click', function (e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        count--;
    }else if(styles.contains("increase")){
        count++;
    }else{
        count = 0;
    }

    //for change in color 

    if(count > 0 ){
        value.style.color = "green";
    } else if(count < 0 ){
        value.style.color = "red";
    } else{
        value.style.color = "black";
    }
    value.textContent = count;
})
});