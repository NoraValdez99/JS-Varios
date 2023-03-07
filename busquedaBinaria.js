//Parámetros:
    //arr=arreglo, l=derecho, r=izquierdo, x=valor a buscar

function busquedaBinaria(arr, l, r, x){
    if(l > r ) return -1; //caso base, si l es mayor que r se regresa -1

    //definir el pivote para comenzar a segmentar el arreglo
    const m = Math.floor((l + r) / 2) //sumamos los índices de derecha e izquierda y lo dividimos entre 2 
    //para que me de el índice de enmedio
    
    //Validar si en la pisción m (pivote) del arreglo está el elemento que buscamos
    if(arr[m] == x) return m //m es la posición

    //Si esto no ocurre, hay que validar si el valor de arr[m] es mayor o menor que el valor x
    if(arr[m] < x){
        //mover variable de left para omitir todos los valores que están antes de la posición de m
        return busquedaBinaria(arr, m + 1, r, x) //Sustituimos derecha por el valor de m + 1 ya que derecha 
        // se tiene que posicionar un turno después de donde se encuentra m
    } else {
        return busquedaBinaria(arr, l, m - 1, x) //igual con izquierda
    }
}

const arr=[2,5,8,12,16,23,38,56,72,91]
console.log(busquedaBinaria(arr, 0, arr.length -1, 72)) // 8
