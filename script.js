const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    alert("Calculate");
    const allowedKeys = '0123456789+-*/.';
    if (allowedKeys.includes(event.key) || event.key === 'Enter' || event.key === 'Backspace') {
        if (event.key === 'Enter') {
            calculate();
        } else if (event.key === 'Backspace') {
            deleteLastChar();
        } else {
            appendToDisplay(event.key);
        }
    }
});
