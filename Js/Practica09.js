const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloConsole2 = "background: linear-gradient(to right, #AF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 9 FUNCTION EXPRESSION -------------", estiloTitulo);
console.log("%c1.1.-  UTILIZANDO LA DECLARACION FUNCTION DECALRATION - DECLARACION FORMAL", estiloConsole);

const sumar = function(a = 0, b = 0){
    console.log(b+a)
    return (a+b)
}   



console.log(`EL RESULATDO DE LA SUMA DE: 8 + 4 ES = ${sumar(4+8)}`)



/* RETO FUNCION EXTRACCION DE VOCALES */

function mostrarVocales(palabra) {
    palabra = palabra.toLowerCase();
    const vocalesEncontradas = [];
  
    for (let i = 0; i < palabra.length; i++) {
      const caracter = palabra[i];
  
      if ("aeiou".includes(caracter)) {

        vocalesEncontradas.push(caracter);
      }
    }
  
    return vocalesEncontradas;
  }
  
console.log(mostrarVocales("Caca"));