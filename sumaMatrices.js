//Sumar dos arrays
/*
const array1 = [5, 6, 3]
const array2 = [8, 4, 2]
const array3 = array1.concat(array2) //contact sirve para enlazar dos arrays

function sumaRecursivaArreglo(numeros){
    //necesitamos dos partes, el caso base y el caso recursivo
    if(numeros.length === 1){
        return numeros[0]; //retornamos lo del ínidice 0 del arreglo
    } else { 
        return numeros.pop(0) + sumaRecursivaArreglo(numeros)
        //extraer el valor que está en el índice 0 y volver a invocar la función suma (n-1)
    }
}

console.log("La suma es: " + sumaRecursivaArreglo(array3)) //15 
*/

/*const array1 = [5, 6, 3]
const array2 = [8, 4, 2]

function sumaArrays(numeros){
    if(numeros.lenght === 1){
        return numeros[0]
    }
    else {
        findSum(array1, array2)
    }
}
console.log(sumaArrays) */

let array1 = [1, 2, 3, 4, 5]
let array2 = [1, 2, 3, 4, 5]
let array3 = []

let suma1 = array1.reduce(function(a, b){
  return a + b;
});

console.log(suma1);

let suma2 = array2.reduce(function(a, b){
    return a + b
})

console.log(suma2)

function suma3(numeros){

if(numeros == 1){
    return
}else{
    array3 = suma1 + suma2
    return numeros.pop(0) + suma3(numeros)
}
}
console.log(suma3)