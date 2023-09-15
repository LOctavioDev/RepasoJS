const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloConsole2 = "background: linear-gradient(to right, #AF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 8 FUNCIONES EN JS-------------", estiloTitulo);
console.log("%c1.1.-  UTILIZANDO LA DECLARACION FUNCTION DECALRATION - DECLARACION FORMAL", estiloConsole);

function sumar(){
    console.log(2+2)
}

sumar()
sumar()
sumar()





console.log("%c1.2.-  FUNCIONES QUE RECIBAN PARAMETROS", estiloConsole2);


function sumarDosNumeros(a,b){
    return (a+b);
}

console.log(`EL RESULATDO DE LA SUMA: ${sumarDosNumeros(5,5)}`);
console.log(`EL RESULATDO DE LA SUMA: ${sumarDosNumeros(5,-58)}`);
console.log(`EL RESULATDO DE LA SUMA: ${sumarDosNumeros(5,"vewvew")}`);

/* EN ESTE CASO DE PREUBA SE DENOTA QUE BERIAMOS VALIDAR LOS DATOS ANTES DE REALIZAR LA OPERCION */





console.log("%c1.-  UTILIZANDO LA DECLARACION FUNCTION DECALRATION - DECLARACION FORMAL", estiloConsole);

function sumarDosNumerosValidacion(a,b){
    if (typeof(a) && typeof(b) != "String"){

        return "REVISA TUS NUMEROS"

    }else{
        return (a + b);
    }
    
}

console.log(`EL RESULATDO DE LA SUMA: ${sumarDosNumerosValidacion(true,5)}`);