function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value.trim();
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (temperatureInput === '' || isNaN(temperatureInput)) {
        resultElement.innerText = 'Please enter a valid temperature.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        resultElement.innerHTML = `
            <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
            <p>Kelvin: ${kelvin.toFixed(2)} K</p>
        `;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        resultElement.innerHTML = `
            <p>Celsius: ${celsius.toFixed(2)} °C</p>
            <p>Kelvin: ${kelvin.toFixed(2)} K</p>
        `;
    } else if (unit === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultElement.innerHTML = `
            <p>Celsius: ${celsius.toFixed(2)} °C</p>
            <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        `;
    }
}
