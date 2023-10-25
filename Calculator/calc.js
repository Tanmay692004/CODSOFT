let screen = document.getElementById('output');
let buttons = document.querySelectorAll('.calculator-button');


function appendToScreen(value) {
    screen.textContent += value;
}


function clearScreen() {
    screen.textContent = '';
}


function deleteLastCharacter() {
    screen.textContent = screen.textContent.slice(0, -1);
}


function evaluateExpression() {
    let result;
    try {
        result = eval(screen.textContent);
    } catch (error) {
        result = 'Error';
    }
    screen.textContent = result;
}
