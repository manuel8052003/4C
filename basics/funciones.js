// funciones en JavaScript
/*
function nombre(params){
    body function
}

const nombre = function (params){
    body function
}
*/
// Funciones sin parametros, y sin retorno
function saludo() {
    console.log(`Hellooo!`)
}
saludo();

// Funciones con parametros sin retorno
const saludaA = function(name) {
    console.log(`Holas ` + name);
}
saludaA(`Ekibidi tow tow`);

// FUnciones con paraetros y con retorno
const fact = function(num) {
    if (num === 0) return 1;
    return fact(num - 1) * num;
}
const result = fact(5);
console.log(result);

// Acrow Funciones a funciones de flecha 
// Sin parametros y sin retorno
const saludaEnChino = () => {
    console.log(`Ni hao`);
}
saludaEnChino();

// con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toupperCase());
}
mayuscula(`hola`);

const minuscula = word => {
    console.log(word.toupperCase());
}
mayuscula(`HELLO`);

// Dos o mas parametros y con retorno
const fullName = (firstName, lastName) => {
    return firstName + ` ` + lastName;
}
const nombreCompleto = fullName(`Bruce`, `Wayne`);
console, log(nombreCompleto);

// Si el return es la unica linea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*function duplica(num){
    return num * 2;
}*/

// Funciones con parametros opcionales
const welcomeMexico = (user = `Invitado`) => {
    console.log(`Bienvenido a Mexico $i user }`);
}

welcomeMexico();
welcomeMexico(`Batman`);

// Parametros con nombre
const welcomeToUtt = (user = `Invitado`,
    City = `Mexico`) => {
    console.log(`Bienvenido $i user } de ${ city }`)
}

welcomeToUtt();
welcomeToUtt(`Bruce Wayne`, `Gotham`);
welcomeToUtt(city = `Metropolis`, user = `Superman`);