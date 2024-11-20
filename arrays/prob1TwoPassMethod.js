// day 1 - prob 1 - approach 2

function getSecondLargestTwoPass(arr){

    let firstMax = -1;
    let secondMax = -1;

    // find the first largest through first traversal
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > firstMax){
            firstMax = arr[i];
        }
    }

    // find the second max through the second traversal
    for(let j = 0; j < arr.length; j++){
        
        if(arr[j] > secondMax && arr[j] !== firstMax){
            secondMax = arr[j];
        }
    }

    return secondMax;
}