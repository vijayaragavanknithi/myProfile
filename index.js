const button= document.querySelector("button");
const body= document.querySelector("body");
const color=['blue','green','yellow','pink'];

body.style.background='violet';
button.addEventListener('click',changeColor);

function changeColor(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.background=color[colorIndex];
}