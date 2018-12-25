const hexNumber=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const hexBtn = document.querySelector(".hexBtn");
const bodyBcg = document.querySelector("body");
const hex = document.querySelector(".hex")


hexBtn.addEventListener('click', getHex)

function getHex(){
    let hexCol = '#';

    for(let i =0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumber.length)
        hexCol = hexCol + hexNumber[random];

    }
    bodyBcg.style.background = hexCol
    hex.innerHTML = hexCol
}