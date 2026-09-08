const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const resultValue = document.getElementById('resultValue');

function validateInputs() {
    const num1 = num1Input.value.trim();
    const num2 = num2Input.value.trim();

    if (num1 === '' || num2 === '') {
        showError('ОШИБКА: Оба поля должны быть заполнены');
        return null;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        showError('ОШИБКА: Введены некорректные данные. Ожидаются числа');
        return null;
    }

    return { number1, number2 };
}

function showError(message) {
    resultValue.textContent = message;
    resultValue.classList.add('error');
}

function showResult(result) {
    resultValue.classList.remove('error');
    resultValue.textContent = result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        showError('ОШИБКА: Деление на ноль невозможно');
        return null;
    }
    return a / b;
}

addBtn.addEventListener('click', () => {
    const inputs = validateInputs();
    if (inputs) {
        const result = add(inputs.number1, inputs.number2);
        showResult(result);
    }
});

subtractBtn.addEventListener('click', () => {
    const inputs = validateInputs();
    if (inputs) {
        const result = subtract(inputs.number1, inputs.number2);
        showResult(result);
    }
});

multiplyBtn.addEventListener('click', () => {
    const inputs = validateInputs();
    if (inputs) {
        const result = multiply(inputs.number1, inputs.number2);
        showResult(result);
    }
});

divideBtn.addEventListener('click', () => {
    const inputs = validateInputs();
    if (inputs) {
        const result = divide(inputs.number1, inputs.number2);
        if (result !== null) {
            showResult(result);
        }
    }
});

num1Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        num2Input.focus();
    }
});

num2Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
