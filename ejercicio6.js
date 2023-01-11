/**
 * 6.	Elaborar un algoritmo para leer las notas de 1 estudiantes.
Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%)
 */

const array = [8,10,3];
let contador; 0;

array.forEach(value => {
    if(value >= 18){
        contador++;
        console.log(value);
    }
})

console.log("su promedio es: " +contador);

