const readline = require("readline-sync")

console.log("=======================");
console.log("      Ejercicio 1      ");
console.log("=======================");

const greet = (name) => {
    console.log("hola " + name);
}

greet("nombre")

console.log("=======================");
console.log("      Ejercicio 2      ");
console.log("=======================");

const fName = readline.question("input your first name: ")
const lName = readline.question("input your last name: ")
const age = readline.question("input your age: ")

const data = {
    nombre: fName,
    apellido: lName,
    edad: age
}

console.log(data);


console.log("=======================");
console.log("      Ejercicio 3      ");
console.log("=======================");

const list1 = [56, "Juan", "Perro"]
const list2 = ["Gato", "Casa", "Agua"]

function findElement(array, keyword) {
    const index = array.indexOf(keyword);
    console.log("Elemento encontrado en la posicion " + index);
}

findElement(list1, "Perro")

findElement(list2, "Gato")

console.log("=======================");
console.log("      Ejercicio 4      ");
console.log("=======================");

const revArray = (array) => {
    const reverse = array.reverse();
    console.log(reverse);
}

revArray(list1)
revArray(list2)


