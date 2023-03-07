//Utilizar una Función Recursiva Personalizada para Aplanar un Arreglo

//¿Qué es aplanar? supongamos: [[1, 2], 3, [[4, 5]], [[[6]]]]
//Al aplanarlo quedaría así: [1,2,3,4,5,6]

function aplanarArreglo(datos, acumuladora){
    if(!Array.isArray(datos))//Si el valor actual que hay en datos no es un arreglo entonces ocurre 
    {
        return;
        //terminar
    } for(const e of datos){ //Iterar los elementos si es arreglo invocamos la función
        if(Array.isArray(e)){
            aplanarArreglo(e, acumuladora)
        } else {
            acumuladora.push(e)
        }
    }
}

let resultado = []
let datos = [[1, 2], 3, [[4, 5]], [[[6]]]]

aplanarArreglo(datos, resultado)
console.log(resultado)
console.log(resultado.length)
