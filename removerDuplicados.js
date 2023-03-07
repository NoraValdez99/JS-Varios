// programa JavaScript para eliminar caracteres duplicados
// de la matriz de caracteres e imprimir en orden

// JavaScript = JvScript
//i = 0
//indexOf('J') === 0 No se repite la J
//lastIndexOf('J') === 0 

function removerCaracteres(texto){
    //Comparar si el valor texto es string
    if(typeof texto === "string"){
        //Si texto es string
        //Obtener los caracteres individuales del texto
        //Cada caracter quedará particinado por la cadena vacía(después de split)
        //LA FUNCIÓN SPLIT RETORNA UN ARREGLO
        let caracteres = texto.split('')
        //Definir una variable resultado para guardar los caracteres, tipo
        //arreglo
        let resultado = []

        //tenemos x cada uno de los caracteres que tiene la cadena
        for (let i = 0; i < texto.length; i++){
           //Invocar la función indexOf y pasar como argumento el caracter en i posición
           //Si el caracter es único, retornará lastIndexOf indicará que es igual, si
           //es repetición, no se incluye en el arreglo resultado
            if(texto.indexOf(caracteres[i]) === texto.lastIndexOf(caracteres[i])){
                resultado.push(caracteres[i])
            }
        }

        return resultado.join('') //Unir caracter con la cadena vacía
    } else {
        //Lanzamiento de TypeError
        throw TypeError('El argumento debe de ser tipo texto')
    }
}

try {
    console.log(removerCaracteres('GeeksforGeeks'))
}catch{
    console.log(`Error: ${e.message}`)
}

try {
    console.log(removerCaracteres('Bayonetta'))
}catch{
    console.log(`Error: ${e.message}`)
}

