function reverseArray(arr){

    let left = 0;  // first pointer storing the first index
    let right = arr.length - 1; // second pointer storing the last index

    while(left < right){   // reverse logic
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}