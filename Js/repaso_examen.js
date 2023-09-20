let numeros = [1,2,6,4,5,1,34,56,6,0]

//Escribe una función que calcule la suma de todos los números en el arreglo.
function sumaNumeros(arreglo){
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
    return suma;
}

console.log(sumaNumeros(numeros));


//Escribe una función que encuentre el número más grande en el arreglo.
function numeroMasGrande(arreglo){
    let mayor = arreglo[0]
    for(let i = 1; i< arreglo.length; i++){
        if(arreglo[i] > mayor){
            mayor = arreglo[i]
        }
    }
    return mayor
}

console.log(numeroMasGrande(numeros));


//Escribe una función que filtre los números pares en el arreglo y los devuelva en un nuevo arreglo.
numeros2 = [1,2,3,4,5,6,7,8,9,10];

const numerosPares = numeros2.filter((numero) => numero % 2 === 0);

console.log(numerosPares);


//Crea un objeto que represente a una persona con propiedades como nombre, edad y dirección.

let persona = {
    nombre : 'Octavio',
    edad : 19,
    direccion : 'Hauchinango'
}

//Escribe una función que tome ese objeto y devuelva una cadena de texto que describa a la persona.

function describeObjeto(objeto){
    console.log(`LA PERSONA LLAMADA: ${objeto.nombre} TIENE ${objeto.edad} ANIOS DE EDAD Y VIVE EN ${objeto.direccion}`)
}

describeObjeto(persona)


//Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumaDosNumeros(a,b){
    return a + b
}

console.log(sumaDosNumeros(1,3))


//Escribe una función que tome un número y devuelva true si es par y false si es impar.
function paroImpar(n){
    if (n % 2 == 0)
        return true
    else
        return false
}

console.log(paroImpar(5))


//Crea una promesa que simule una operación asincrónica, como una solicitud HTTP ficticia.



//Crea un arreglo de nombres.
let arregloNombres = ['Yayo','Ocatvio','Jesus','Briones']


//Utiliza un bucle for o forEach para imprimir cada nombre en la consola.
arregloNombres.forEach(element => {
    console.log(element)
});

/* ----------------------------------------------------------------------------------------------------------------- */


//Dado un arreglo de números, utiliza splice para eliminar el segundo elemento del arreglo.
let numeros3 = [1,2,3,4,5]

numeros3.splice(1,1)

console.log(numeros3)


//Dado un arreglo de colores, utiliza splice para reemplazar el tercer color con "verde".
let colores = ['verde','morado','azul','gris']

colores.splice(2,0,"amarillo")

console.log(colores)


//Dado un arreglo de frutas, utiliza splice para agregar "plátano" y "uva" como elementos en la posición 2 del arreglo.
let frutas = ['platano','uva','tomate','kiwi']

frutas.splice(1,0,"fresa","cereza")

console.log(frutas)



//Dado un arreglo de letras, utiliza splice para extraer las letras "B", "C" y "D" y almacenarlas en un nuevo arreglo.
