// Condicional If
//if(exp){}
let age = 18;
if (age >= 18) {
    console.log(`Es mayor de edad`);
}

//if(exp){} else {}
if (age >= 10) {
    console.log(`Es mayor de edad`);
} else {
    console.log(`Es menor de edad`)
}

// if ternario (exp)? true; false;
(age >= 18) ? console.log(`Es mayor`): console.log(`Es menor`);

//if(exp){} else if {exp} {}
let ppi = Math.random();
if (ppi < 0.33) {
    console.log(`Cayo piedra`);
} else if (ppi < 0.66) {
    console.log(`Cayo papel`);
} else {
    console.log(`Cayo Tijera`);
}

//switch case
let day = Math.floor(Math.random() * 7);
switch (day) {
    case 0:
        console.log(`Lunes`);
        break;
    case 1:
        console.log(`Martes`);
        break;
    case 2:
        console.log(`Miercoles`);
        break;
    case 3:
        console.log(`Jueves`);
        break;
    case 4:
        console.log(`Viernes`);
        break;
    case 5:
        console.log(`Sabado`);
        break;
    case 6:
        console.log(`Domingo`);
        break;
}

// Thruty and Falsy
// `` == false
console.log(`` === false)
    // `a` == true
console.log(`a` === true)
    // 0 == false
console.log(0 === false)
    // 1 == true
console.log(1 === true)

let username = ``;
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = `Extrano`;
}
console.log(defaultName);

username = `Peter`;
defaultName = username || `Extrano`;
console.log(defaultName);