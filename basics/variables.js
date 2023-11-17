//JS no es tipado por lo que no se especifica tipo de dato

//Para declaración de variables
//Utilizamos const y let
//const para variables de solo lectura
//let para variables

const pi= 3.14;
//No podremos asignar nuevos valores a const
//pi = "tres";

//debemos inicializar siempre const
//const g;
//g = 1.89;

let contador;
console.log(contador);

contador = 10;
contador += 1;
contador += 1;
contador += 1;
contador += 1;

console.log(contador);

contador = "Ahora soy un string";
console.log(contador);

let verdad = true;
console.log(typeof(verdad));
console.log(typeof(contador));