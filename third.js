// Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’
// and dividing three and seven with ‘foobar’. Function with n params.

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
