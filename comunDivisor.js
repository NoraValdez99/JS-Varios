//Definir Función Recursiva para Calcular el Máximo Común Divisor (MCD)

//encontrar por ejemplo de manera manual los divisores de 18 => 1, 2, 3, 6, 9, 18
//24 => 1, 2, 3, 4, 6, 8, 12, 24
//¿Cuál es el máximo común divisor de 24 y 18? es 6
//MCD (18, 24) = 6

function comunDivisor(x, y){
    //caso base
    if(!y){ //también se puede (y == 0)
        return x
    } else { //caso recursivo
        return comunDivisor(y, x % y); //con % se encuentra el módulo de los números
    }
}

console.log(comunDivisor(18, 24)) // 6
