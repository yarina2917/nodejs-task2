// Create function which will return function with callback in arguments

function main(...args) {
    let func = args.find(el => typeof el === 'function');
    if (func) {
        args.splice(args.indexOf(func), 1);
        return func(...args);
    }
}

main(1, 2, 3, function (...args) {
    console.log(args)
});
