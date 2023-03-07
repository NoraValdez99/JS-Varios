//Un nodo tiene dos hijos: Izquierda y Derecha 
    class Nodo {
        constructor(data){
            this.data = data;
            this.izq = null;
            this.der = null; 
        }
    }
    //Ahora vamos a agregar una función que un nuevo nodo  con
    //los datos e hijos izq y der
    
    function newNodo (data){
        let nodo =  new Nodo (data);
        return nodo;
    }
    //Evaluar si el hijo es más grande que el nodo
    function maxValue(nodo){
        if(nodo == null) return Number.MIN_VALUE;
        let valor = nodo.data;
        let izqMax = maxValue(nodo.izq);
        let derMax = maxValue(nodo.der); 
        return Math.max(valor, Math.max(izqMax, derMax));
    }
    
    //Evaluar si el hijo es más pequeño que el nodo
    function minValue(nodo){
         if(nodo == null) return Number.MAX_VALUE;
         
         let valor = nodo.datos;
         let izqMax = minValue(nodo.izq);
         let derMax = minValue(nodo.der);
         
         return Math.min(valor, Math.min(izqMax, derMax));
    }
    
    
    function esBST (nodo){
        // Devuelve verdadero si un árbol binario es un árbol de búsqueda binaria
        if(nodo == null){
            return 1;
        }
        //devuelve falso si el max de izquierda es más grande que el nodo
        if (nodo.izq != null && maxValue (nodo.izq) > nodo.data){
            return 0;
        }
          // falso si el min de la derecha es menos que el nodo
        if(nodo.der != null & minValue (nodo.der) < nodo.data){
            return 0; 
        }
        // falso si, recursivamente, la izquierda o la derecha no es un BST
        if(!esBST(nodo.izq) || !esBST(nodo.der)){
            return 0;
        }
        //Pasando lo anterior, es un BST
        else {
            return 1;
        }
    }
    
    //Código de los números de la primera y segunda
    //rama del árbol, llamamos a la función newNodo
    let root = newNodo(4)
    root.izq = newNodo(2)
    root.der = newNodo(5)
    
    // raíz.derecha.izquierda = Nodo(7)
    root.izq.izq = newNodo(1)
    root.izq.der = newNodo(3)
    
    //Llamar la función
    if(esBST(root))
        console.log(1);
    else
        console.log(0);