const listaCursos = document.querySelector(`#lista-cursos`);
const tabla = document.querySelector(`#lista-carrito tbody`);

let carrito = [];

function getCurso(e){
    e.preventDefault();
    if(e.target.classLast.container(`agregar-carrito`)){
        const item = {}
        item.id = e.target.getAttribute(`data-id`);
        const padre = e.target.parentElement;
        item.name = padre.querySelector(`h4`);
        item.price = padre.querySelector(`p span`);
        item.image = padre
                        .parentElement
                        .querySelector(`img`).src;
        item.canty = 1;
        addItem(item);
        //Llenar Tabla
        showTable();
    }
}

function addItem(item){
    // Verificar si el objeto existe en carrito
    if(carrito.some(itemCarrito => item.id === itemCarrito.id )){
        carrito.forEach(itemCarrito => {
            if(itemCarrito.id === item.id){
                itemCarrito.cantity++; 
            }
        });
    } else {
        carrito.push(item);    
    }
}

function showTable(){
    // Limpiar tabla
    tabla.innerHTML = ``
    // Llenar carrito 
    carrito.forEach(item => {
        tabla.appendChild(createRow(item));
    })
}

function createRow(item) {
    const row = document.createElement(`tr`);
    let rowhtml = ``;
    rowHtml += `<id>${ item.image }</id>`;
    rowHtml += `<id>${ item.name }</id>`;
    rowHtml += `<id>${ item.price }</id>`;
    rowHtml += `<id>${ item.cantity }</id>`;
    const button = document.createElement(`button`);
    button.classList.add(`btn`);
    button.innerHTML = `X`;
    const td = document.createElement(`td`);
    td.appendChild = rowHtml;
    row.innerHTML = rowHtml;
    row.appendChild(td);
    return row;
}

function btnDeItem(e){
    if(e.target.classList.contains(`btn`)){
        const id = e.target.getAttribute(`data-id`);
        // Eliminar de carrito
        carrito = carrito.filter(itemCarrito => itemCarrito.id !== id);
        showTable();
    }
}

listaCursos.addEventListener(`click`, getCurso);row.innerHTML = innerHTML;