// // DECLARACION DE VARIABLES

// //VAR
// console.log("-----PRACTICA 02: DECALRACION DE VARIABLES-----")

console.log(
    "%c---------PRACTICA 02: DECLARACION DE VARIABLES---------",
    "background: linear-gradient(to right, #cc44, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 0px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
  );


console.log(
    "%cA) DECLARACION CON VAR",
    "background: linear-gradient(to right, #ffcc, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
  );
var apellido
var nombre = "Marco";
console.log(`Hola ${nombre}`);
console.log(typeof(nombre))

nombre = 17

console.log(`Hola ${nombre}`);
console.log(typeof(nombre))


console.log(typeof(nombre))



// //LET 
// //PREFIJO UTILIZADO PARA VARIABLES, QUE AL IGUAL QUE VAR SON REDEFINIBLES, PUEDEEN SER DECLARADAS CON VALOR INCIALIZADO, SE PUEDEN REASIGNAR.
console.log(
    "%cB) DECLARACION CON LET",
    "background: linear-gradient(to right, #ffcc, #ff3300);color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
  );
let colorFavorito = "Negro";
console.log(`Tu color favorito es: ${colorFavorito}`);

colorFavorito = 25;

console.log(`Tu color favorito es: ${colorFavorito}`);
console.log(typeof(colorFavorito));


// //CONST
// //PREJIO QUE PERMITE LA CREACION DE CONSTANTES, VALORES QUE O VAN A CAMBIAR DURANTE SU USO, NO SE PUEDEN DECLARAR SIN INICIALIZACION
console.log(
    "%cC) DECLARACION CON CONST",
    "background: linear-gradient(to right, #ffcc, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
  );

const cancionFavorita = "Las que no tienen papa";
console.log(`Tu cancion favorita es: ${cancionFavorita}`);
console.log(typeof(cancionFavorita));


let num1 = 1
let num2 = "1"

if(num1 === num2){
    console.log("Son iguales");
}
else{
    console.log("No")
}


//ESTILIZACION DE SECCIONES:
