/**
 * var,let,const
 * repetitivas:for, foreach, while, do while
 * condicionales: if-else, switch, if-else if-else
 * 
 *  Ejercicio: Leer numero entero y determinar si tiene 3 digitos.
 * 
 * Lenght: Cuenta el numero de caracteres de una variable, String y array
 */

let entero = 145655;

let cadena = entero.toString();

if(cadena.lenght == 3){

    console.log("El entero tiene 3 digitos");
}else{
    console.log("El entero no tiene 3 digitos, tiene " + cadena.length)
}