let name = "Marina";
let lastName = 'Portillo';
console.log("Soy " + name + ' y mi apellido es ' + lastName);
console.log("I'm " + name + " " + lastName);
console.log("I\'m " + name + " " + lastName);

//Imprimir Soy Marina Portillo y tengo 22 años
// String Templates o Strings Literals
//placeholder ${}
console.log(`Soy ${ name } ${ lastName } y tengo ${ age } años`);

//metodos y atributos para Strings 
const texto = "Este Es uN TexTo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
console.log('*'.repeat(10));