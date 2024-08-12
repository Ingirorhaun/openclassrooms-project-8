function appendToDisplay(char) {
    document.getElementById('display').value += '' + char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const expression = document.getElementById('display').value;
    if (expression.includes('/0')) {
        document.getElementById('display').value = 'Division by zero is not allowed';
    } else {
        document.getElementById('display').value = eval(expression);
    }
}