const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

console.log(
    "%c-------PRACTICA 03: TIPOS DE DATOS EN JAVASCRIPT-------",
    "background: linear-gradient(to right, #cc44, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 0px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
);


console.log(
  "%c1) UNDEFINDED - NO DEFINIDO ", estiloConsole);

let HolaMundo;
console.log(HolaMundo);
console.log(typeof(HolaMundo));




console.log(
    "%c2) BOOLEANO (TRUE FALSE)", estiloConsole);

let MayorEdad = true;
let alumnoInscrito = false;

console.log(`ES MAYOR DE EDAD? ${MayorEdad}`);
console.log(typeof(MayorEdad));

console.log(`ESTA INSCRITO? ${alumnoInscrito}`);
console.log(typeof(alumnoInscrito));




console.log(
    "%c3) NUMBER (INT, DOUBLE, FLOAR, NEGATIVE)", estiloConsole);

const edad = 19;
const precio = 19.5;
const temperatura = -52;
let tipoMoneda;

console.log(`JUAN TIENE LA EDAD DE: ${edad}`);
console.log(typeof(edad));

tipoMoneda = " pesos.";
console.log(`EL PRECIO DEL HUEVO ES DE: ${precio} ${tipoMoneda}`);
console.log(typeof(precio));

console.log(`LA TEMPERATURA ACRUAL ES DE: ${temperatura} GRADOS` );
console.log(typeof(temperatura))




console.log(
    "%c4) STRING (CADENA DE CARACTERES)", estiloConsole);

let nombreCLiente = "Marco Antonio";
let genero = "Masculino";
let edadCliente = 27;
let direccion = "Santa Catarina Fortin Numero 47";


console.log(`######DATOS DEL ALUMNO######\n
    1.- Nombre: ${nombreCLiente}, ${typeof(nombreCLiente)}\n
    2.- Genero: ${genero}, ${typeof(genero)}\n
    3.- Edad: ${edad}, ${typeof(edad)}\n
    4.- Direccion: ${direccion}, ${typeof(direccion)}
`);




console.log(
    "%c5) BIGINT (NUMEROS ENTEROS GRANDE)", estiloConsole);

let numero12posiciones = 123456789012;
const numero24posiciones = BigInt(1234567890121234567890986);

console.log(`EL VALOR DE: ${numero12posiciones}, ${(typeof(numero12posiciones))}`);
console.log(`EL VALOR DE: ${numero24posiciones}, ${(typeof(numero24posiciones))}`);

numero12posiciones = BigInt(numero12posiciones);

let sumaGrande = numero12posiciones+numero24posiciones;
console.log(`LA SUMA DE ${numero12posiciones} + ${numero24posiciones} ES: ${sumaGrande}, DE TIPO: ${typeof(sumaGrande)}`);




console.log(
    "%c6) SYMBOL", estiloConsole);

const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(primerSymbol.valueOf());

if (primerSymbol == segundoSymbol){
    console.log("SON IGUALES");
}
else {
    console.log("NO SON IGUALES");
    
}


console.log(
    "%c7) NULL", estiloConsole);

const unNulo = null;

console.log(unNulo)


