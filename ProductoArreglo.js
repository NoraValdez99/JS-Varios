//Definir una Función Recursiva para Calcular Producto Arreglo de Números
//multiplicación de un arreflo

function productoNumerosRecursivo(numeros) {
    //Caso base y caso recursivo
    if (numeros.length == 1) {//caso base, la longitud es igual a 1
       return numeros[0];
    } else { //caso recursivo
        return numeros.pop(0) * productoNumerosRecursivo(numeros);
        //extraer el primer elemento del arreglo multiplicar por lo que retoma de numeros Recursivos
    }
}

let numeros = [1, 2, 3, 4, 5];
console.log(productoNumerosRecursivo(numeros));