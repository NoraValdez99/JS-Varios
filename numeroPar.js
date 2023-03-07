//Definir una Función Recursiva para Validar Si un Número Dado es Par

function esParRecursivo(numero){
    if(numero < 0){
        numero = Math.abs(numero) //preguntamos también con números negartivos con valor abs (absolute)
    } 

    if (numero === 0 ){
        return true; // si agregamos 0 debería de dar true
    }

    if(numero === 1){
        return false; //si es impar es false
    } else {
        numero -= 2 // LE RESTAMOS 2 PARA REDUCIRLO 

        return esParRecursivo(numero) //E invocamos la función y pasamos como argumento lo que hay en número
    }
}

console.log(esParRecursivo(13));
console.log(esParRecursivo(10));
console.log(esParRecursivo(-19));
console.log(esParRecursivo(19));
console.log(esParRecursivo(100));
console.log(esParRecursivo(100,050));