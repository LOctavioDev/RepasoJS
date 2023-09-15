const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";



console.log("%c--------------PRACTICA 7 ITERADORES-------------", estiloTitulo);
console.log("%c1.- UTILIZANDO EL BUCLE FOR ", estiloConsole);

let tecnolgias = ['HTML','JAVASCRIPT','PYTHON','SQL','ANGULAR','FLUTTER','REACT','DJANGO','FLASK','JIRA','GIT','SWAGGER','HTML'];


for(let i = 0; i < tecnolgias.length; i++){
    console.log(`EL ELEMENTO EN LA POSICION: ${i} ES: ${tecnolgias[i]}`);
};


console.log("----------RETO2 WHILE 😘");

let iterador = 0;

while(iterador < tecnolgias.length){
    console.log(tecnolgias[iterador])
    iterador++;
}




console.log("%c2.- UTILIZANDO EL BUCLE FOR EACH ", estiloConsole);


console.log('Solucion A)');
tecnolgias.forEach((elemento) => console.log(`EL ELEMENTO EN LA POSICION: ${tecnolgias.indexOf(elemento)} ES: ${elemento}`));

console.log('Solucion B)');
tecnolgias.forEach((elemento, indice) => console.log(`EL ELEMENTO EN LA POSICION: ${indice} ES: ${elemento}`));
tecnolgias.pop();


console.log("%c3.- UTILIZANDO MAP PARA TRANSOFORMAR LOS ELEMENTOS DENTRO DEL ARREGLO", estiloConsole);

console.log("RETO1");
let tecnolgiasTipo = tecnolgias.map(
    (elemento) => {
        if(["HTML","REACT",'ANGULAR'].includes(elemento))
            return (elemento + ", FRONTEND")

        else if(["PYTHON","DJANGO","FLASK","GIT","JIRA","SQL"].includes(elemento))
            return (elemento + ", BACKEND")

        else
            return (elemento + ", FRONTEND Y BACKEND")
    });

console.table(tecnolgiasTipo)


