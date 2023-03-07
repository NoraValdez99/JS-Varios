let arrayA = [[1,2,3], [4,5,6], [7,8,9]];
let arrayB = [[9,8,7], [6,5,4], [3,2,1]];
arrayC = []
function sumaMatrices(arrayC){
  
  for (let i = 0; i < arrayA.length; i++){
      const row = []
      for(let j = 0; j < arrayA[i].length; j++){
         const suma = arrayA[i][j] + arrayB[i][j]
         row.push(suma)
        }
        arrayC.push(row)
  }
  return arrayC;
}
console.log("La suma de las dos matrices: "+sumaMatrices(arrayC));

