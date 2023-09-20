const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloConsole2 = "background: linear-gradient(to right, #AF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 10 FUNCIONES ANONIMAS  O FLECHAS (ARROW FUNCTIONS)-------------", estiloTitulo);
console.log("%c1.1.-  FUNCIONES FLECHAS", estiloConsole);

console.log("SALUDANDO DESDE UNA FUNCION ANONIMA....")

const saludo = () => console.log("%cHOLA QUE TAL....", estiloConsole2)

saludo()
console.log("HE TERMINADO DE SALUDAR")


/* FUNCION FELCHA QUE RECIBA VARIABLES*/

console.log("%c1.2.-  FUNCIONES FLECHAS FUNCION ANONIMA DEL SaludoHora", estiloConsole);
const saludo_Variable = (nombre, hora = new Date()) => {

    let horas = hora.getHours()//CONVIERTE A 24 H

    if(nombre === undefined)
        return `MO SE HA DEFINIDO EL NOMBRE DE LA PERSONA A SALUDAR, POR FAVOR VERIFICA EL LLAMADO DE LA FUNCIOON`

    else{
        if(horas >= 6 && horas < 12){
            return `BUENOS DIAS, ${nombre}`
        }

        else if(horas >= 12 && horas <= 19){
            return `BUENAS TARDES, ${nombre}`
        }

        else{
            return `BUENAS NOCHES, ${nombre}`
        }
    }

}
// CASOS DE PRUEBA

console.log(`EL RESULTADO DE LA FUNCION ES: ${saludo_Variable("MARCO")}`);
console.log(`EL RESULTADO DE LA FUNCION ES: ${saludo_Variable("BRIONES",new Date('September 19, 2023 08:00:00'))}`);
console.log(`EL RESULTADO DE LA FUNCION ES: ${saludo_Variable("HAZIEL",new Date('December 25, 3200 21:40:00'))}`);
console.log(`EL RESULTADO DE LA FUNCION ES: ${saludo_Variable("JESUS",new Date('December, 0 00:00:00'))}`);



