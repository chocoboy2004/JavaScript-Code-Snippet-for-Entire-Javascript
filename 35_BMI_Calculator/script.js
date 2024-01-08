const form = document.querySelector('.bmi-form');

form.addEventListener('submit', (events) => {
    events.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('.result');

    if (height === '' || height <= 0 || isNaN(height)) {
        result.textContent = 'oops!'
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.textContent = 'oops!'
    } else {
        const bmi = parseInt(weight / ((height * height) / 1000));
        result.textContent = bmi;
    }
});
