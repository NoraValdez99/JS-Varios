//Implementar Algoritmo Recursivo para Invertir el Contenido de un Arreglo

function invertirArreglo(arreglo, indice, cadena) {//arreglo que contiene los elementos, longitud del arreglo y la cadena de inicialización
    return indice == 0 ? cadena : invertirArreglo (arreglo, --indice, (cadena += ' ' + arreglo[indice])) 
    //preguntar si el indice es igual a 0, cuando sea igual retornamos el contenido de la variable cadena, 
         //en caso contrario invocar función invertirArreglo recursivo primer argumento es la contenido de arreglo
                //y para paasar al sig elemento reducimos longitud en una unidad y el tercer argumento al contenido de cadena le concatenamos
                    //el valor que tiene el arreglo en posición de longitud
}
let lenguajes = ['Python', 'JavaScript', 'Java', 'C++', 'PHP ']

let resultados = invertirArreglo(lenguajes, lenguajes.length, '')
console.log(resultados)

//Cuando invocamos la funcion invertir arreglo la longitud es la cantidad de elementos del arreglo, indice = 0? no, entonces invoca la función del contenido 
//del arreglo, cuando indice sea 0, se retorna el contenido de cadena

