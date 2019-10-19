// Find in array: sum, min and max, replace min and max - create custom functions

function count(arr) {

    let values = {
        min: Math.min(...arr),
        max: Math.max(...arr),
        sum: arr.reduce((a, b) => a + b),
        arr: arr
    };
    arr[arr.indexOf(values.min)] = values.max;
    arr[arr.indexOf(values.max)] = values.min;

    return values;
}

console.log(count([1, 50, 6, -7, 10, 30]));
