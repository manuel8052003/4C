//funciones de orden superior
//high order functions
//funciones que reciben como parametros
//más funciones

const myFunctionWithBigName = () => {
    console.log('Función Inicial');
}
console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Función Uno');{
    }
    }

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('Ejecuta Función Dos');
}

funOne();
funTwo('Frank');

const funThree = (otherFunctionn) => {
    console.log('Inicia Función tres');
    otherFunctionn();
    console.log('Inicia Función tres');
}
funThree(funOne);
funThree(() => console.log('Finción de Flecha'));
