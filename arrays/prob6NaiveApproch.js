// Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times.
// Note: The returned array of majority elements should be sorted.

function findMajority(arr){

    let n = arr.length;
    let result = [];

    for(let i = 0; i < n ; i++){

        let count = 0;
        for(let j = 0; j < n; j++){
            if(arr[j] === arr[i]){
                count = count + 1;
            }
        }

        if(count > (n/3)){
            if(result.length === 0 || arr[i] !== result[0]){
                result.push(arr[i]);
            }
        }

        if(result.length === 2){
            if(result[0] > result[1]){
                [result[0], result[1]] = [result[0], result[1]];
            }
            break;
        }
    }

    return result;
}