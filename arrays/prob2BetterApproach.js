
// move all zero to the end in the array
// better solution compared to using the temp array

function pushZeroToEnd(arr){

    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[count] = arr[i];
            count++;
        }
    }

    while(count < arr.length){
        arr[count] = 0;
        count++;
    }
}