function drawCalculator() {
    let valuesContainer = document.querySelector('.values');
    let values = [0,1,2,3,4,5,6,7,8,9,'*','/','+','-'];
    valuesContainer.addEventListener('click', valuesHandler);
    addElements(values, valuesContainer);

    let actionsContainer = document.querySelector('.actions');
    let actions = ['Reset', 'Result'];
    actionsContainer.addEventListener('click', actionsHandler);
    addElements(actions, actionsContainer);
}

function addElements(arr, container) {
    let elements = '';
    for (let i = 0; i < arr.length; i++) {
        elements += `<span class="elements">${arr[i]}</span>`
    }
    container.innerHTML = elements;
}

function valuesHandler(e) {
    let resultContainer = document.querySelector('.result');
    if (resultContainer.innerHTML.indexOf('=') === -1) {
        let newValue = e.target.innerHTML;
        let currentValue = resultContainer.innerHTML.trim();
        // check if newValue is number or math operation
        if (isNaN(+newValue)) {
            // if last element is math operation, replace it with new, else add with whitespaces
            if (isNaN(+currentValue[currentValue.length - 1])) {
                resultContainer.innerHTML = currentValue.slice(0, currentValue.length - 2) + ` ${newValue} `;
            } else {
                resultContainer.innerHTML += ` ${newValue} `;
            }
        } else {
            resultContainer.innerHTML += newValue;
        }
    }
}


function actionsHandler(e) {
    let resultContainer = document.querySelector('.result');
    let action = e.target.innerHTML;
    if (action === 'Result' && resultContainer.innerHTML.indexOf('=') === -1) {
        calculate(resultContainer.innerHTML.split(' '));
    } else if (action === 'Reset') {
        resultContainer.innerHTML = '';
    }
}

function calculate(arr) {
    const count = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    // fill arrays with numbers and it's math operations
    let numbers = [];
    let operations = [];

    arr.forEach(el => {
        isNaN(+el) ? operations.push(el) : numbers.push(el);
    });

    // do count with * and /
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '*' || operations[i] === '/') {
            numbers.splice(i, 2, count[operations[i]](+numbers[i], +numbers[i + 1]));
            operations.splice(i, 1);
            i--;
        }
    }

    // do count with + and -
    for (let i = 0; i < operations.length; i++) {
        numbers.splice(i, 2, count[operations[i]](+numbers[i], +numbers[i + 1]));
        operations.splice(i, 1);
        i--;
    }

    document.querySelector('.result').innerHTML += ` = ${numbers[0]}`;
}

drawCalculator();
