function getSecondLargestOnePass(arr){

    let len = arr.length;

    let firstMax = -1;
    let secondMax = -1;

    for(let i = 0 ; i < len; i++){

        if(arr[i] > firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }else if(arr[i] > secondMax && arr[i] < firstMax){
            secondMax = arr[i];
        }
    }

    return secondMax;
}