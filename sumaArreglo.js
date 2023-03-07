//Definir una función recursiva para calcular la suma de un arreglo de números
function sumaRecursivaArreglo(numeros){
    //necesitamos dos partes, el caso base y el caso recursivo
    if(numeros.length === 1){
        return numeros[0]; //retornamos lo del ínidice 0 del arreglo
    } else { 
        return numeros.pop(0) + sumaRecursivaArreglo(numeros)
        //extraer el valor que está en el índice 0 y volver a invocar la función suma (n-1)
    }
}

console.log("La suma es: " + sumaRecursivaArreglo([1 , 2 , 3 , 4 , 5])) //15 