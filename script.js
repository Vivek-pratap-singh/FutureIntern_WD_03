// temperatureConverter.js

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Main conversion function
function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    // Validate the temperature input
    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDiv.textContent = "Please enter a valid number for the temperature.";
        return;
    }
    
    // Validate the unit input
    if (unit === "") {
        resultDiv.textContent = "Please select a unit for conversion.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    switch (unit) {
        case 'celsius':
            convertedTemperature = celsiusToFahrenheit(temperature);
            convertedUnit = 'Fahrenheit';
            break;
        case 'fahrenheit':
            convertedTemperature = fahrenheitToCelsius(temperature);
            convertedUnit = 'Celsius';
            break;
        default:
            resultDiv.textContent = "Invalid unit selected.";
            return;
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${convertedUnit}`;
}
