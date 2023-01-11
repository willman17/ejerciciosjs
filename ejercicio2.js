/**
 * if-else if-else
 */

let precio;
let calculo = 0;
precio = 455;
if (precio > 20 && precio<= 40){
        calculo = precio * 0.30;
        console.log("Precio del articulo" + precio + "\n" +
        "Impuesto a pagar" + calculo + "\n" + 
        "El impuesto es del 30%");
}else if(precio > 40 && precio <= 500){
    calculo = precio * 0.40;
    console.log("precio del artiulo " + precio + "\n" +
    "impuesto a pagar " + calculo + "\n" + 
    "el impuesto es del 40%");
}else if(precio > 500){
    calculo = precio * 0.50;
    console.log("precio del articulo" + precio + "\n" +
    "impuesto a pagar" + calculo + "\n" +
    "El impuesto es del 50%")
}else{
    console.log("el precio del articulo no genera impuesto")
}