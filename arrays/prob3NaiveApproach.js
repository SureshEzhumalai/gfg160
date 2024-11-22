// reverse an array

function reverseArray(arr){

    let len  = arr.length;   // length of the array
    let temp = new Array(len);  // temp array with length equal to original array
    let index = 0; // index to track temp array

    for(let i = len-1; i >=0 ; i--){  // reverse logic
        temp[index] = arr[i];
        index++;
    }

    for(let i = 0; i < len; i++){  // copying reversed temp array original array
        arr[i] = temp[i];

    }
}