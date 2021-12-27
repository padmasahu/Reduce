//It takes an array and reduces the result according to the logic of "reducer" function given.

// in m logic:
function reduce(arr, reducer, initialValue) {
    let sum = initialValue === undefined ? 0 : initialValue
    // loop though array
    for(let i=0;i<arr.length;i++)
    sum = sumReducer(sum, arr[i], i, arr);
    return sum;
}

function sumReducer(sum, currentValue) {
    return sum + currentValue;
}

let arr = [10,20,35,42,45];
//new reduce function
const result = reduce(arr,sumReducer(),5);
console.log(result);