//Definir Función para Calcular el Factorial con Recursión y un Acumulador

function calcularFactorial(n, a){
    if(n == 0){ //n no es igual a 0, pasa a else
        return a //caso base
    } else { //caso recursivo
        return calcularFactorial(n - 1, a * n) //Aquí es donde se va acumulando, 
        //se le resta n - 1, y luego se multiplica el acumulador (1) por n, y así sucesivamente
        //hasta completar el número designado a n, por ejemplo 5
    }
}
//5! = 120
//6! = 720
//7! = 5040

console.log(calcularFactorial(5,1)) //120
console.log(calcularFactorial(6,1)) //720
console.log(calcularFactorial(7,1)) //5040

