const containerEL = document.querySelector(".container");



const careers = ["Frontend Developer", "Backend Developer", "Fullstack Developer"]

let careersIndex = 0;
let xterIndex = 0;

function updateText(){
    xterIndex++;
    containerEL.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0,xterIndex)}</h1>
    `;
    if (xterIndex === careers[careersIndex].length) {
        careersIndex++;
        xterIndex = 0;
    }

    if (careersIndex === careers.length){
        careersIndex = 0
    }
    setTimeout(updateText, 400);
}

updateText()