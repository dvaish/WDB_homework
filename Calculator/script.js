let a = 0;
let b = 0;
let funcState = null;


function display(item) {
    let display = document.getElementById('display');
    display.innerHTML = item;
}

function operation(operator, x, y) {
    switch (operator) {
        case null:
            return x;
        case 'equal':
            return y;
        case 'add':
            return y + x;
        case 'minus':
            return y - x;
        case 'divide':
            return y / x;
        case 'multiply':
            return y * x;
    }
}

function onClick(evt) {
    let operationEvent = evt.target
    switch (operationEvent.className) {
        case 'number':
            a = (a == 0) ? operationEvent.innerHTML : (a + operationEvent.innerHTML);
            display(a)
            break;
        case 'function':
            a = Number(a);
            b = operation(funcState, a, b);
            a = '0';
            display(b);
            funcState = operationEvent.id;
            break;
        case 'delete':
            a = a.slice(0, -1);
            display(a)
            break;
        case 'clear':
            a = 0;
            b = 0;
            funcState = null;
            display(a);
            break;
        default:
            display('empty')
    }
}

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener('click', onClick);
}