// Definimos dos matrices de ejemplo
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

// Función para sumar dos matrices
function sumMatrix(matrix1, matrix2) {
  const result = []; // Creamos una matriz vacía para el resultado
  
  // Recorremos cada fila de las matrices
  for (let i = 0; i < matrix1.length; i++) {
    const row = []; // Creamos una fila vacía para el resultado
    
    // Recorremos cada columna de la fila actual
    for (let j = 0; j < matrix1[i].length; j++) {
      // Sumamos los valores correspondientes de las dos matrices
      const sum = matrix1[i][j] + matrix2[i][j];
      
      // Añadimos el valor a la fila
      row.push(sum);
    }
    
    // Añadimos la fila completa al resultado
    result.push(row);
  }
  
  return result;
}

// Ejecutamos la función y mostramos el resultado en la consola
console.log(sumMatrix(matrix1, matrix2));