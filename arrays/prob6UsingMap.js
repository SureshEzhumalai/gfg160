// Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times.
// Note: The returned array of majority elements should be sorted.
// solving with help of objects

function findMajority(arr){

    let n = arr.length;
    let freq = {};
    let result = []

    for(let elm of arr){
        freq[elm] = (freq[elm] || 0) + 1
    }

    for(let key in freq){
        let val = Number(key);
        let count = freq[key];

        if(count > (n/3)){
            result.pust(val);
        }
    }

    if(result.length === 2 && res[0] > res[1]){
        [result[0], result[1]] = [result[1], result[0]];
    }

    return result;
}