let a = 0;
let b = 0;
let funcState = null;

function display(item) {
    // General function for passing item to display
    let display = document.getElementById('display');
    display.innerHTML = item;
}

display(0) // Set the display to 0 on load

function operation(operator, x, y) { 
    // Operator logic in each operation case
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
    let operationEvent = evt.target // Identifies the button that was pressed
    switch (operationEvent.className) {
        case 'number':
            // If button was a number, load it to a
            a = (a == 0) ? operationEvent.innerHTML : (a + operationEvent.innerHTML);
            display(a)
            break;
        case 'function':
            // If button was a function: store the value of a by pushing it to b, set a to 0 to take a new value
            // If a and b were both numbers, then the function is valid and will perform the operation
            a = Number(a);
            b = operation(funcState, a, b);
            a = '0';
            display(b);
            funcState = operationEvent.id;
            break;
        case 'delete':
            // Slice the string stored in a to delete the last digit
            a = a.slice(0, -1);
            display(a)
            break;
        case 'clear':
            // Set all values to 0 or null to reset clear calculator
            a = 0;
            b = 0;
            funcState = null;
            display(a);
            break;
        default:
            display(0)
            break;
    }
}

const buttons = document.querySelectorAll('button'); // Select all buttons in calculator
for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener('click', onClick); // Add event listener to every button to pass their value to calculator
}