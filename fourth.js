// Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.

function compareStrings(str1, str2) {
    let count = 0;
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');

    for (let i = 0; i < str1Arr.length; i++) {
        for (let y = 0; y < str2Arr.length; y++) {
            if (str1Arr[i] === str2Arr[y]) {
                count++;
                str2Arr.splice(y, 1);
                break
            }
        }
    }
    return (count * 2 / (str1.length + str2.length)).toFixed(2) + '%';
}

console.log(compareStrings('qqwerty', 'qqqwww'));
console.log(compareStrings('qwerty', 'qwerty'));
console.log(compareStrings('qwe', 'qqqqqq'));
