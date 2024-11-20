// Day 1 - Return the second largest element in an array
// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.


function getSecondLargestElement(arr){

    
    let len = arr.length;
    arr.sort( (a, b) => b - a);

    for(let i = 1 ; i < len; i++){

        if(arr[i] !== arr[0]){
            return arr[i];
        }
    }

    return -1;
    
}