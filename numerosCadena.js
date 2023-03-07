//Crear una Función Recursiva para Contar los Caracteres de una Cadena
 
function conteoRecursivo(texto){
    return texto.length ? 1 + conteoRecursivo(texto.slice(1)) : 0 //tendremos el uso del operador ternario, preguntamos si el texto tiene la propiedad length, si
    //devuelve contenido, si es así, sumamos 1 al resultado de invocar de forma recursiva la función, toma una sección del caracter (texto.slice), si no hay nada en 
    //length, retorna 0
}

function conteo (texto){
    //Esta función evalúa que la función anterior sea texto, recibimos un texto, y verificamos que sea tipo string, si es de otro tipo, lanzará un error.
    //si pasa la prueba, invocamos texto
    if(typeof texto != 'string'){
        throw TypeError ('El argumento debe de ser una cadena de caracteres')
    }
    return conteoRecursivo(texto)
}

try{
    //invocamos la función anterior
    console.log(conteo('JavaScript'))
}catch(e){
    console.log(`Error: ${e.message}`)
}