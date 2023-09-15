const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 6 ARRAYS EN JS-------------", estiloTitulo);
console.log("%c1.-DECLARACION DE UN ARREGLO EN JS", estiloConsole);

const meses = ["FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","PERICO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE"];

console.log(meses);
console.table(meses);
console.log(typeof meses);


const mixto = ['String',10,-58.2, false, Symbol(45), 'a',-0.0000000000000,true, {prop1: "valor", prop2: "2"}]

console.log(mixto);
console.table(mixto);
console.log(typeof mixto);



console.log("ARREGLOS MULTIDIMENSIONALE");

let matrix = [[1,2,3],["a","b","c","d"]]
console.log(matrix);
console.table(matrix);

console.table(matrix[1][2]);



console.log("%c2.-RECUPERAR LOS ELEMENTOS DE UN ARREGLO", estiloConsole);
console.log(`EL MES EN LA POSICION 8: ${meses[8]}, QUE EN LA REALIDAD ES EL NOVENO MES, POR QUE EN ARREGLOS LA POSICION SIEMPRE SERA n-1`);

console.log(`ACCEDIENDO AL ELEMENTO EN LA POSICION 12 DEL ARREGLO MIXTO: ${mixto[12]}`);



console.log("%c3.-FUNCIONES DE UN ARREGLO (ARRAY METHODS)", estiloConsole);
//-------------------METODOS QUE MODIFICAN EL ARRELO ORIGINAL------------------

console.log(`PARA SABER EL TOTAL DE ELEMENTOS DE UN ARREGL UTILIZAREMOS EL METODO : LENGHT`);
console.log(`EL ARREGLO DE MESES TIENE: ${meses.length} ELEMENTO`);
console.log(`EL ARREGLO MIXTO TIENE: ${mixto.length} ELEMENTO`);


console.log(`PARA AGREGAR UN ELEMENTO AL ARREGLO EN LA POSICION FINAL USAREMOS EL METODO : PUSH`);
meses.push("GATO");
console.table(meses);


console.log(`PARA AGREGAR UN ELEMENTO AL ARREGLO EN LA POSICION INICIAL USAREMOS EL METODO : UNSHIFT`);
meses.unshift("PERRO");
console.table(meses);


console.log(`PARA ELIMINAR UN ELEMENTO AL ARREGLO EN LA POSICION ULTIMA USAREMOS EL METODO : POP`);
console.log(`ELIMINADO EL ULTIMO ELEMENTO DE LA POSICION: ${meses[meses.length-1]}`);
meses.pop(); /*ELIMINANDO EL INCORRECTO*/
meses.push("DICIEMBRE"); 
console.log("EL ARREGLO ACUTAL ES:}");
console.table(meses);




console.log(`ELIMINANDO EL ELEMENTO EN LA PRIMERA POSICION ${meses[0]}`);
meses.shift(); /*ELIMINA EL INCORRECTO*/
meses.unshift("ENERO");
console.log("EL ARREGLO ACUTAL ES:");
console.table(meses);





console.log(`DIVIDIENDO EL ARREGLO ORIGINAL, SACAR LOS PRIMEROS 3 ELEEMNTOS`);
// meses.splice(3);    /* SI NO MANDO DOS PARAMETROS ELIMINA LOS RESTANTES A SU TAMANIO*/

meses.splice(7,1)
console.table(meses);



console.log("%c4.-FILTER METHOD", estiloConsole);

let signoZodiacales = ["Aries","Tauro","Geminis","Cancer","Leo","Virgio","Libra","Escorpion","Sagitario","Capricornio","Piscis","Acuario"];

console.log(`EL TOTAL DE SIGNOS ZODIACALES ES: ${signoZodiacales.length}`);






console.log("%c5.-DESETRUCTURACION DE ARREGLOS", estiloConsole);

let [singo0,singo1,singo2,singo3,singo4,singo5,singo6,singo7] = signoZodiacales;

console.log(`EL SIGNO ZODIACAL EN LA POSICION [0] ES: ${singo0}`);
console.log(`EL SIGNO ZODIACAL EN LA POSICION [8] ES: ${singo7}`);


let [singo_0,,,,,,,singo_7] = signoZodiacales;

console.log(`EL SIGNO ZODIACAL EN LA POSICION [0] ES: ${singo_0}`);
console.log(`EL SIGNO ZODIACAL EN LA POSICION [8] ES: ${singo_7}`);
// console.log(`EL SIGNO ZODIACAL EN LA POSICION [0] ES: ${singo_1}`);







console.log("%c6.-METODOS DE ARREGLOS QUE CREAN UNO NUEVO, PARA NO MODIFICAR EL ARREGLO ORIGINAL", estiloConsole);

console.warn("6.1--------------FILTER-------------");
console.log('EL ARREGLO ORIGINAL ES: ');
console.log(signoZodiacales);
console.log('FILTRANDO DATOS... ');
const signosFiltrados = signoZodiacales.filter((signoZodiacales) => signoZodiacales.length > 6);
console.log('FILTRADO TERMINADO ');
console.log('EL ARREGLO RESUTANTE ES: ');
console.log(signosFiltrados);


const signosFiltrados2 = signoZodiacales.filter((signoZodiacales) => signoZodiacales.includes("a") || signoZodiacales.includes("A"));

console.log('EL ARREGLO RESUTANTE ES: ');
console.log(signosFiltrados2);






console.warn("6.2--------------MAP-------------");

// const nombres = ["Alice", "Bob", "Charlie", "David"];


const numeros = [1,2,3,4,5]

console.log(`EL ARREGLO ORIGINAL ES: ${numeros}`)

const dobles = numeros.map(numero => numero * 2 );

console.log(`EL ARREGLO CON EL DOBLE DE LOS ELEMENTOS DEL ORIGINAL ES: ${dobles}`);




const palabras = ['Como','Estas','Hoy','Hay','Mi','Amigo','Yayo','briones','Jajaja','Jesus']

const longitudesDeNombres = palabras.map(function(palabra) {
     return palabra.length; 
});
 
console.log(longitudesDeNombres);




console.warn("6.3--------------REDUCE-------------");
const numeross = [1,2,3,4,5];
const suma = numeross.reduce(function (resultado, elemento){
    return resultado + elemento;
}, 0);

console.log(suma);



var mascota = ['perro','gato','pollo','gato','pollo','pollo','conejo'];

var recuentosMascota = mascota.reduce(function(obj, mascota){
    if (!obj[mascota]){
        obj[mascota] = 1;
    } else {
        obj[mascota]++;
    }
    return obj;
}, {});

console.table(recuentosMascota);

//ARREGLO 10 PRODUCTOS CON SU PRECIO TOTAL DE LA COMPRA

/* 
ORDEN PRODUCTO  CANTIDAD
*/