//Definir una Función Recursiva para Calcular la Potencia de un Número

//tenemos un número a como base y un número b como exponente (a ^ b = a por si misma b veces) 
// a ^ b = a_1 * a_2 * ... a_(b-1) * a_b
//ex. 2 ^ 3 = 2 * 2 * 2 = 8

function potencia(a, b){
    if(b == 0){ //preguntamos si b es igual a 0 cuando sea reducido
        return 1; // retornamos el valor 1
    } else {
        return a * potencia(a, b - 1) //caso contrario multiplicamos el valor de por potencia, 
                    //lo que retorne este con la misma base a y el exponente reducido a una unidad
    }
}

console.log(potencia(2, 3))