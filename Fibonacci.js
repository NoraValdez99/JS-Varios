//Práctica Fibonacci 
//Entender cómo funciona la secuencia:
// 0,1,1,2,3,5,8,13...
// n = 0 -> 0
// n = 1 -> 1
// n = 2 -> 1+0

//Con recursividad 
/*const fibonacci = n => { // nota: en recursividad SIEMPRE lleva un if
    if (n < 2) return n
    return fibonacci (n - 2) + fibonacci (n - 1) //Se llama así misma la función sumando los 
    dos números del resultado y así sucesivamente 
}*/

//Fibonacci sin recursividad

const fibonacci = n => 
{
    const fib = [0, 1] // Array donde se guardan los números de fibonacci 
    for (let i = 2; i <= n; i++){ //el for inicia con el dos y va en suceción 
        fib [i] = fib[i - 2] + fib [i - 1] // 1. va guardando la serie de números
        //cosa que no hace el de recursividad, la diferencia es que es más
        //rápido que el de recursividad, es más óptimo
    }
      return fib[n]  
}

console.info(fibonacci(2))
console.info(fibonacci(3))
console.info(fibonacci(4))
console.info(fibonacci(10))
console.info(fibonacci(100))

//con Recursividad  Big 0 -> n 
// Sin recursividad Big 0 -> 2^n
