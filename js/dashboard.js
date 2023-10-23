const button=document.querySelector('.button-switch');
const body=document.querySelector('body');
let darkSwitch=false;


/*
button.addEventListener('click',()=>{
    if(darkSwitch===false){
        button.style.justifyContent='left';
        document.querySelector('body').classList.add('dark-theme');
        darkSwitch=true;
    }else{
        button.style.justifyContent='right';
        document.querySelector('body').classList.remove('dark-theme');
        darkSwitch=false;
    }
});

*/

button.addEventListener('click',()=>{
    body.classList.toggle('dark-theme');
});


