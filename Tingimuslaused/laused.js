function checkUserInfo() {
    // Get user input
    const age = parseInt(document.getElementById('age').value);
    const fruit = document.getElementById('fruit').value.toLowerCase();
    let result = '';

    // Determine age group
    if (age < 13) {
        result += 'Sa oled laps.<br>';
    } else if (age >= 13 && age < 18) {
        result += 'Sa oled teismeline.<br>';
    } else {
        result += 'Sa oled täiskasvanu.<br>';
    }

    // Check if fruit is known
    switch (fruit) {
        case 'õun':
        case 'banaan':
        case 'apelsin':
            result += 'Sinu lemmikvili on tuntud vili.<br>';
            break;
        default:
            result += 'Sinu lemmikvili on eriline valik!<br>';
            break;
    }

    // Determine ticket type using ternary operator
    const ticketType = (age < 18) ? 'Sul on õigus sooduspiletile.' : 'Sul on õigus täispiletile.';
    result += ticketType;

    // Display result
    document.getElementById('result').innerHTML = result;
}
