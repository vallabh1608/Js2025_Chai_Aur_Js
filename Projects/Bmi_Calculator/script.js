const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const heightval = parseInt(document.querySelector('#height').value);
    const weightval = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Clear previous results
    results.innerHTML = '';

    // Input validation
    if (isNaN(heightval) || heightval <= 0) {
        results.innerHTML += `<p>Please provide a valid height value: ${heightval}</p>`;
    }
    if (isNaN(weightval) || weightval <= 0) {
        results.innerHTML += `<p>Please provide a valid weight value: ${weightval}</p>`;
    }

    // If both values are valid, calculate BMI
    if (!isNaN(heightval) && heightval > 0 && !isNaN(weightval) && weightval > 0) {
        const bmi = (weightval / ((heightval * heightval) / 10000)).toFixed(2);
        results.innerHTML = `<p>Your BMI is: <strong>${bmi}</strong></p>`;
    }
});
