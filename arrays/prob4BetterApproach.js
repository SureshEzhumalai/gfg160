// rotate array to left by d times using temp array
// time complexity O(n)
// space complexity O(n)

function rotateArrayToLeft(arr, d){

    let n = arr.length;

    d = n % d;

    let temp = new Array(n);

    for(let i = 0; i < n - d; i++){
        temp[i] = arr[d + i];
    }

    for(let i = 0; i < d ; i ++){
        temp[n - d + i] = arr[i];
    }

    for(let i = 0; i < n ; i++){
        arr[i] = temp[i];
    }
}