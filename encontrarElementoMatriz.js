// Javascript encontrar el elemento perdido más pequeño en un array ordenado
//Dada una matríz ordenada de n enteros distintos, donde cada entero está en el rango 
//de 0 a m-1 y m>n, encuentra el número más pequeño que falta en la matríz


//Ejemplo: 1. Input: {0,1,2,6,9}, n=5, m=10, entonces el faltante es 3
     
    function findFirstMissing(array, start, end)
    {
        if (start > end) //Si el índice inicial es mayor que el final, retornaremos end + 1
            return end + 1;
   
        if (start != array[start]) //Caso contrario, comprobar si el inicio es igual al elemento almacenado al inicio 
            //si es cierto, retornamos start 
            return start;
   
        let mid = parseInt((start + end) / 2, 10);//si las dos condiciones anteriores son falsas, 
        //encontraremos el índice de enmedio y comprobaremos si es igual al elemento almacenado en la mitad 
   
        // La mitad izquierda tiene todos los elementos desde 0 hasta la mitad
        if (array[mid] == mid)
            return findFirstMissing(array, mid+1, end);
   
        return findFirstMissing(array, start, mid);
    }
     
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 10];
    let n = arr.length;
 
    console.log("El elemento más pequeño faltante es " +
    findFirstMissing(arr, 0, n - 1));
    