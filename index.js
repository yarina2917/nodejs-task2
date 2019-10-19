// First task

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

// Second task


// Third task

function replaceNumbers(...args) {
    return args.map(number => {
        if (!(number % 3) && !(number % 7)) {
            return 'foobar';
        }
        if (!(number % 7)) {
            return 'foo';
        }
        if (!(number % 3)) {
            return 'bar';
        }
        return number;
    })
}

console.log(replaceNumbers(1, 16, 21, 30, 150));

// Fourth task

function compareStrings(str1, str2) {
    let count = {};
    let check = false;

    for (let i = 0; i < str1.length; i++) {
        for (let y = 0; y < str2.length; y++) {
            if (str1[i] === str2[y]) {
                let letter = str1[i];
                if (!count[letter]) {
                    // if no letter in obj, write it, array - [count of letter from first str, count of letter from second str]
                    // check variable uses for writing all count of letter from second string, when we find same letters in first time
                    count[letter] = [1, 1];
                    check = true;
                } else if (count[letter][0] === 1 && check) {
                    // write all count of letter from second string
                    count[letter][1]++;
                } else {
                    // break, when we find same letter in first string not in first time
                    count[letter][0]++;
                    break
                }
            }
        }
        check = false;
    }

    // find sum of letters obj
    let sum = 0;
    for (let value in count) {
        sum += Math.min(...count[value]);
    }
    return (sum * 100 / Math.min(str1.length, str2.length)).toFixed(2) + '%';
}

console.log(compareStrings('qqwerty', 'qqqwww'));
console.log(compareStrings('qwerty', 'qwerty'));
console.log(compareStrings('qwe', 'qqqqqq'));
