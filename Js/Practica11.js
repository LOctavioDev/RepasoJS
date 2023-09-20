const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloConsole2 = "background: linear-gradient(to right, #AF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 11 OTROS METODOS UTILES PARA ARREGLOS-------------", estiloTitulo);
console.log("%c1.- SOME", estiloConsole);


let tecnolgias = ['HTML','JAVASCRIPT','PYTHON','SQL','ANGULAR','FLUTTER','REACT','DJANGO','FLASK','JIRA','GIT','SWAGGER','HTML'];
let numeros = [1,3,6,4.56456,0.004,-582,141,-124.42,90000,100.01]
console.table(numeros)
console.log(numeros.length)

let resultado = numeros.some((numero) => numero > 0)
console.log("BUSCANDO SI HAY ALGUN NUMERO EN EL ARREGLO MAYOR A 0");
console.log(resultado)

resultado = numeros.some((numero) => numero > 100000)
console.log("BUSCANDO SI HAY ALGUN NUMERO EN EL ARREGLO MAYOR A 100000");
console.log(resultado)



console.log("%c2.- FIND", estiloConsole);

console.log("BUSCANDO SI HAY ALGUN NUMERO EN EL ARREGLO MAYOR A 1000");
resultado = numeros.find((numero) => numero > 1000);
console.log(resultado)

console.log("BUSCANDO SI HAY ALGUN NUMERO EN EL ARREGLO MENOR A -1000");
resultado = numeros.find((numero) => numero < -1000.00);
console.log(resultado)



console.log("%c3.- EVERY - PARA CADA", estiloConsole);
console.table(tecnolgias)

console.log("RETORNA UN BOOLEANO RESPECTO A SI TODOS LOS ELEMENTOS CUMPLEN CON LA CONDICION");
resultado = tecnolgias.every((elemento) => typeof(elemento) == "string");
console.log(resultado)

resultado = tecnolgias.every((elemento) => typeof(elemento) == "number");
console.log(resultado)