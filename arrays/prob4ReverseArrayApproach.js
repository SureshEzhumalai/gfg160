// rotate array to left by d times using the reverse array approach

function rotateArrayToLeft(arr, d){
    let n = arr.length;
    
    reverse(arr, 0 , d-1);
    reverse(arr, d, n -1);
    reverse(arr, 0 , n-1);
}

function reverse(arr, start, end){

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}