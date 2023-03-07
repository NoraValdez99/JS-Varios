//  Un número como entrada, fizzbuzz va del 1 al 100, si es múltiplo de 3, 
//se imprime fizz, si es de 5 buzz, si es de ambos fizzbuzz

function fizzbuzz(num){
    //Caso base: cuando el número sea mayor a 100, debe de deternse 
    if (num > 100){
        return
    }

    //Crear variables 
    const multiploTres = num%3 === 0;
    const multiploCinco = num%5 === 0; 

    //Verificar si  el número es múltiplo de 3 y 5 
    if (multiploTres && multiploCinco ){
        console.log('FizzBuzz')
    } else if (multiploTres){
        console.log('Fizz')
    } else if(multiploCinco){
        console.log('Buzz')
    } else {
        console.log(num)
    }

    fizzbuzz(num + 1)
}

fizzbuzz(1)