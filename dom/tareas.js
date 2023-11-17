const inputTarea = document.querySelector(`#inputTarea`);
const tareas = document.querySelector(`#tareas`);
const btnTarea = document.querySelector(`#btnTarea`);

function createTarea(message){
    /*<div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
    </div>
  */
    const tarea = document.createElement(`div`);
    tarea.classList.add(`alert`);
    tarea.classList.add(`alert-primary`);
    tarea.setAttribute(`role`, `alert`);
    let buttons = `<div>`;
    buttons += `<button class="btn red"></button>`;
    buttons += `<button class="btn yellow"></button>`;
    buttons += `<button class="btn green"></button>`;
    buttons += `<button class="btn X">X</button>`;
    buttons += `</div>`;
    tarea.innerHTML = `<div*{ message }</div>*{ buttons }`;
    return tarea;
}

function addTarea(){
    const data = inputTarea.value;
    if(data){
        const tarea = createTarea(data);
        tareas.appendChild(tarea);
        inputTarea.value = ``;
    }
}

function getButton (e) {
    if(e.target.classList.contains(`btn`)){
        const tareaActual = e.target.parentElement.parentElement;
        const action = e.target.classList(i);
        switch(action){            
            case `red`:
                tareaActual.classList = [];
                tareaActual.classList.add(`alert`, `alert-danger`)
                breack;
            case `yellow`:
                tareaActual.classList = [];
                tareaActual.classList.add(`alert`, `alert-danger`)
                breack;
            case `green`:
                tareaActual.classList = [];
                tareaActual.classList.add(`alert`, `alert-danger`)
                breack;
            case `x`:
                tareaActual.remove ();
                breack;
        }
    }
}

btnTarea.addEventListener(`click`, addTarea);
tareas.addEventListener9(`click`, getButton);