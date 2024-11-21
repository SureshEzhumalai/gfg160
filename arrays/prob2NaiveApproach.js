function pushZeroToEnd(arr){

    let len = arr.length;  
    let temp = new Array(len);  // temp array
    let j = 0;                  // variable to track indices of temp array

    // copy non zero elements to temp array
    for(let i = 0; i < len; i++){ 
        if(arr[i] !== 0){
            temp[j] = arr[i];
            j++;
        }
    }

    // fill remaining indices with zero
    while(j < len){
        temp[j] = 0;
        j++;
    }

    // copy temp array values to original array
    for(let i = 0; i < len; i++){
        arr[i] = temp[i];
    }



}