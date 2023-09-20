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





console.log("%c1..-  UTILIZANDO LA DECLARACION FUNCTION DECALRATION - DECLARACION FORMAL", estiloConsole);
console.log("%c1RETO DEL BRIONES", estiloConsole);

function sumarDosNumerosValidacion(num1,num2){
    if (typeof(num1) != "string" && typeof(num2) != "string"){

        return (num1 + num2);
        
    }else{
        return "REVISA TUS NUMEROS"
    }    
}

console.log(`EL RESULTADO DE LA SUMA: ${sumarDosNumerosValidacion(5,5)}`);






console.log("%c1.3.-  Con parametros por Default", estiloConsole);

function multiplicar(a = 1, b = 1){
    return(a * b)
}

console.log(`EL RESULATDO DE LA MULTIPLICACION ES: ${multiplicar(5,2)}`)
console.log(`EL RESULATDO DE LA MULTIPLICACION ES: ${multiplicar(5)}`)




console.log("%c1.4.-  CUANDO RETORNA UN RESULTADO DE TIPO OBJETO", estiloConsole);

function saluda(){
    console.log("Hola Porfe Marco")  /* FUNCIONES VACIAS*/
}
saluda()

function saludarHora(persona, hora = new Date()){
    const horas = `LA HORA ES: ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
    let saludo;
    
    console.log(horas)

    if(horas >= 6 && horas < 12){
        saludo = "Buenos Dias";
    }

    else if (horas >= 12 && horas < 19){
        saludo = "Buenas Tardes";
    }

    else
        saludo = "Buenas Noches";

    return [persona, hora, `${saludo}, ${persona}.`]

}

let saludo = saludarHora("Juan")

console.table(saludo);

let[,,saludoWeb] = saludo;
console.log(saludoWeb)