const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloConsole2 = "background: linear-gradient(to right, #AF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 12 SENTENCIAS DE CONTROL-------------", estiloTitulo);
console.log("%c1.- Si (IF)", estiloConsole);

let mayorEdad = true;

if(mayorEdad == true){
    console.log("ES MAYOR DE EDAD");
}

console.log("%c2.- Si, ademas (IF - ELSE)", estiloConsole);

if(mayorEdad == true){
    console.log("ES MAYOR DE EDAD")
}
else{
    console.log("ES MENOR DE EDAD")
}


console.log("%c3.- Si, ademas (IF - ELSE - IF) ANIDADOS", estiloConsole);


let persona = {
    "nombre" : "JANE",
    "edad" : 15,
    "pais" : "US",
    "mayorEdad" : null
}

if(persona.pais == "MX")
    if(persona.edad >= 18)
        persona.mayorEdad = true
    else
        persona.mayorEdad = false

else if(persona.pais == "US")
    if(persona.edad >= 21)
        persona.mayorEdad = true
    else
        persona.mayorEdad = false

console.log(`LOS DATOS DE LA PERSONA ${persona.nombre} SON: `)
console.table(persona)


console.log("%c4.- OPERADORES TERNARIOS (? : )", estiloConsole);
console.log("VERIFICANDO A MAYORIA DE EDAD CON EL OPERADOR TERNARIO")


mayorEdad?console.log("ES MAYOR DE EDAD."):console.log("ES MENOR DE EDAD")

persona.pais=="MX" ? persona.edad>=18 ? persona.mayorEdad = true:persona.mayorEdad=false : persona.pais=="US"?persona.edad>=21 ? persona.mayorEdad=true : persona.mayorEdad = false : undefined

console.log(`LOS DATOS DEL OBJETO: ${persona.nombre} SON: `)
console.table(persona)



/* OPERADORES DE IGUALDAD
    = ASIGNAR EL VALOR A UNA VARIABLE
    == COMPARAR LA IGUALDAD DE DOS VARIABLES
    === COMPARAR LA IGUALDAD EN VALOR Y TIPO DE DATO
*/

console.log(`CREADNO UNA VARIABLE a Y ASIGANNDOLE UN VALOR NUMERICO = 2`)
let a = 2

console.log(`CREADNO UNA VARIABLE b Y ASIGANNDOLE UN VALOR NUMERICO = 2.0`)
let b = 2.0

console.log(`CREADNO UNA VARIABLE c Y ASIGANNDOLE UN VALOR STRING = 2`)
let c = '2'

console.log("YA QUE ESTAN INICIALIZADAS EMPEZAMOS A COMPARAR: ")

console.log(`ES a IGUAL b ?:" ${a==b?true:false}`)
console.log(`ES a IGUAL c ?: " ${a==c?true:false}`)
console.log(`ES a ESTRUCTAMENTE IGUAL c ?:" ${a===c?true:false}`)



