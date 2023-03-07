/*function bubbleSort(arr) 
{
    let swapped 
    do
    {
    swapped = false 
    for(let i = 0; i < arr.lenght -1; i++)
        {
        if (arr[i] > arr[i+1])
            {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp // estas tres líneas son las que hacen todo el intercambio
            swapped = true
            } 
        }
    }
    while(swapped)//este es el proceso de repetir la comparación 
}
const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);

function BubbleSort(arr, swapped=false){
    swapped = false;
    for(let i = 0; i < arr.length -1;i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swapped = true
        }
    }
    if(!swapped){
        return arr;
    } else {
        return BubbleSort(arr,swapped)
        console.log(BubbleSort);
    }
}*/

function bubbleSort(arr){
    
    let swapped  = true
   while(swapped) {
       swapped = false
        for(let i = 0; i < arr.length; i++){
            let temporary= arr[i]
            if(arr[i] > arr[i + 1]){
                arr[i] = arr[i + 1]
                arr[i + 1 ] = temporary
              swapped = true
                
            }
           
        }
    }  
    return arr
}
console.log(bubbleSort([-2, -4, 9 , 2,9, -19, 4]))

