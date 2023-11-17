const body = document.querySelector(`body`);
const h2 = document.querySelector(`h2`);
const btnColor = document.querySelector(`#btnColor`);

function setColor(){
    const digitos = `0123456789ABCDEF`;
    let colorRGB = `#`;
    for(let i=o; i<6; i++){
        const index = Math.floor(Math.random() * 16)
        constRGB += digitos.charAt(index)
    }
    h2.innerHTML = colorRGB;
    body.style.background = colorRGB;
}

setColor();

btnColor.addEventListener(`click`, setColor);