/**
 * 
 * 5.	Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad.
 * 
 * Estructura foreach
 */

const array = [8,15,19,30,45,32,8,18,50,7];
let contador; 0;

array.forEach(value => {
    if(value >= 18){
        contador++;
        console.log(value);
    }
})

console.log("Total de personas mayores de edad: " +contador);
