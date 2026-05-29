// Como entrada de datos tendremos, el nombre del producto, el precio unitario y la cantidad en stock. imprimir en consola:
// - El mensaje: == SISTEMA BASICO DE INVENTARIO ==
// - producto registrado: [nombre del producto]
// - precio unitario: $[precio del producto]
// unidades disponibles: [cantidad en stock]
// valor total del inventario: [precio unitario * cantidad en stock]

import promptSync from 'prompt-sync'; // Importamos la función promptSync para poder solicitar datos al usuario en la consola.
import fs from 'node:fs'; // Importamos el módulo fs para poder escribir en un archivo de texto.
const prompt = promptSync(); // Creamos una instancia de promptSync para poder usarla en nuestro código.
const archivo = './inventario.json'; // Definimos el nombre del archivo donde se guardará el inventario.


// Primero intentamos leer el inventario actual
let inventario = { producto1: {}, producto2: {} }; // Creamos una variablwe para almacenar el inventario, vacia al inicio.
if (fs.existsSync(archivo)) { // Luego verificamos que el archivo exista
    const datos = fs.readFileSync(archivo, 'utf-8'); // Si existe, leemos su contenido y lo almacenamos en la variable datos.
    inventario = JSON.parse(datos); // Con los datos lo transformamos a algo que podamos usar en nuestro programa, un objeto de JavaScript, y lo asignamos a la variable inventario.
}

// Si el archivo del inventario no existe, solicitamos al usuario que ingrese los datos de los productos y los guardamos en el archivo.

if (!fs.existsSync(archivo)) { // leemos el archivo para verificar si existe, de lo contrario solicitamos los datos de los productos al usuario.
    console.log( "== SISTEMA BASICO DE INVENTARIO ==\n" );
    console.log( "No se encontró un archivo de inventario existente. Por favor, ingrese los datos de los productos.\n" );
//primer producto

const producto1 = {
    nombre: prompt( "Ingrese el nombre del primer producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};
//segundo producto

const producto2 = {
    nombre: prompt( "Ingrese el nombre del segundo producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};

// Guardamos los datos en el archivo con sus variables correspondientes, y actualizamos el objeto inventario con los datos ingresados por el usuario.
fs.writeFileSync(archivo, JSON.stringify({ producto1, producto2 }, null, 2)); // Escribimos el objeto inventario en el archivo de texto en formato JSON.
inventario = { producto1, producto2 }; // Actualizamos el objeto inventario con los datos ingresados por el usuario.
}

console.clear(); // Limpiamos la consola para mostrar solo el sistema de inventario con los datos de los productos registrados.

//Imprimir en consola el mensaje para 3 productos distintos:
// - el mensaje: == Sistema basico de inventario ==
// producto 1: nombre, precio, cantidad
// producto 2: nombre, precio, cantidad
// producto 3: nombre, precio, cantidad

// Finalmente mostramos el inventario con los datos de los productos registrados, el valor total del inventario y un mensaje de fin del sistema de inventario.

console.log( "== SISTEMA BASICO DE INVENTARIO ==\n" );
console.log( `Producto registrado: ${inventario.producto1.nombre}` );
console.log( `Precio unitario: $${inventario.producto1.precio}` );
console.log( `Unidades disponibles: ${inventario.producto1.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto1.precio * inventario.producto1.cantidad}\n\n` );
console.log( `Producto registrado: ${inventario.producto2.nombre}` );
console.log( `Precio unitario: $${inventario.producto2.precio}` );
console.log( `Unidades disponibles: ${inventario.producto2.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto2.precio * inventario.producto2.cantidad}\n\n` );
console.log( `Valor total de los productos en inventario: $${(inventario.producto1.precio * inventario.producto1.cantidad) + (inventario.producto2.precio * inventario.producto2.cantidad)}\n\n` );
console.log( "== FIN DEL SISTEMA DE INVENTARIO ==" );

/*
De esta forma nos aseguramos de crear una mini base de datos en un archivo de texto, json, para almacenar los datos y crear una persistencia de datos sin necesitar una base de datos real, y al mismo tiempo, mostrar el sistema de inventario con los datos de los productos registrados, el valor total del inventario y un mensaje de fin del sistema de inventario.

Al ejecutar el programa por primera vez, se solicitará al usuario que ingrese los datos de los productos, y luego se guardarán en el archivo de texto. En ejecuciones posteriores, el programa leerá los datos del archivo y mostrará el inventario sin necesidad de ingresar los datos nuevamente, a menos que se elimine el archivo o se modifique su contenido.
*/

/* 
Son las 3 de la mañana y ando escribiendo tanto comentarios como puedo para entenderlo para el futuro
*/