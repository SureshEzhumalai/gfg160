function reverseArray(arr){

    let n = arr.length;

    for(let i = 0 ; i < n / 2 ; i++){  // reverse logic using swap method
        let temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
}