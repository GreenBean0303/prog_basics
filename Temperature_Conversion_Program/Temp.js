function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature() {
    let temperature = parseFloat(prompt("Enter the temperature:"));
    let scale = prompt("Enter the scale (C for Celsius or F for Fahrenheit):").toUpperCase();

    if (scale === "C") {
        let fahrenheit = celsiusToFahrenheit(temperature);
        alert(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else if (scale === "F") {
        let celsius = fahrenheitToCelsius(temperature);
        alert(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
        alert("Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    }
}
