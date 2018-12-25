const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['green','blue','yellow','violet','red','#3b5998'];


colorBtn.addEventListener('click', changeColor);

function changeColor(){
    
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
    
}