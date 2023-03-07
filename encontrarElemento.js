function findMissingElement(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] !== mid + 1 && arr[mid - 1] === mid) {
        return mid + 1;
      } else if (arr[mid] === mid + 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1; // Si no se encuentra ningún elemento faltante
  }

  const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

  console.log(findMissingElement(arr))
  
  
  
  