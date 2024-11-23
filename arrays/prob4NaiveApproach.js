// rotate array to left by d times
// this is the simple approach to move array by d times left
// time complexity O(n*d)
function rotateArrayToLeft(arr, d){

    for(let i = 0; i < d ; i++){

        let first = arr[0];
        for(let j = 0; j < arr.length -1 ; j++){
            arr[j] = arr[j+1]
        }

        arr[arr.length - 1] = first;
    }

    return arr;
}