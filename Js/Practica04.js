//OBJETOS EN JAVASCRIPT

//ESTILOS
const estiloConsole = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 15px; padding: 7px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";

const estiloTitulo = "background: linear-gradient(to right, #EF1313, #ff3300); color: white; font-size: 20px; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);";


console.log("%c--------------PRACTICA 4 OBJETOS EN JS-------------", estiloTitulo);
console.log("%c1.-DECLARACION", estiloConsole);

console.log("%c----VARIABLES INDEPENDIENTES", estiloConsole);
const producto = 'Tablet 9"';
const precio = 3525.00;
const disponibiliad =  true;

console.log(`LEYENDO LOS DATOS DESDE VARIABLES INDEPENDIENTES DEL PRODUCTO:\n 
1.-NOMBRE: ${producto}, ${typeof(producto)}\n 
2.-PRECIO: $${precio}, ${typeof(precio)}\n 
3.-DISPONIBILIDAD: ${disponibiliad}, ${typeof(disponibiliad)}`);




console.log("%c2.-DECLARACION DE UN OBJETO", estiloConsole);

//DECLARACION DE LA VARIABLE
let productoObjeto = {
    nombre : 'Tablet 9"',
    precio : 3525.00,
    disponibiliad : true
}

//LECTURA DE LOS VALORES DE LAS PROPIEDADES DEL OBJETO
console.log(productoObjeto);
console.table(productoObjeto);

console.log(`LEYENDO LOS DATOS INDEPENDIENTES DESDE UN OBJETO\n
NOMBRE: ${productoObjeto.nombre}, ${typeof(productoObjeto.nombre)}\n
PRECIO: ${productoObjeto.precio}, ${typeof(productoObjeto.precio)}\n
DISPONIBILIDAD: ${productoObjeto.disponibiliad}, ${typeof(productoObjeto.precio)}`);

console.log(`TIPO DE DATO DE PRODUCTO OBJETO ES: ${typeof(productoObjeto)}`)



//DESTRURING
console.log("%c3.-DESESTRUCTURACION DE UN OBJETO", estiloConsole);

let productCategory;

let {nombre: productName, precio:  productPrice, disponibiliad: productAvailability} = productoObjeto; 

if (productAvailability == false)
    productAvailability = "NO AVAILABLE";

if(productPrice > 1000)
    productPrice = "EXPENSIVE";

if (productName.includes("Tablet"))
    productCategory = "ELECTRONICS";

console.log(`${productName}, ${productAvailability}, ${productPrice}`)


console.log(`LEYENDO LOS DATOS DESESRUCTURADOS: \n
NAME: ${productName}, 
PRICE TYPE: ${productPrice}
Availability, ${productCategory}`);

console.table(productoObjeto);



console.log("%c4.-MEJORA DE OBJETOS (OBJECT LITERAL ENHANCEMENT)", estiloConsole);
//HAY VARIALES INDEPENDIENTES... CONVERTIR EN UN OBJETO UNICO

const productObject = {productName, productPrice, productCategory, productAvailability}

console.table(productObject)



