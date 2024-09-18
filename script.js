
function showTab(tabId) {
    // Hide all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        /*tabs[i].classList.remove('active');*/
    }

    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
}

// Code for changing theme
document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('theme');
    const bodyElement = document.body;

    // Apply saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        bodyElement.classList.add('dark-mode');
    }

    // Add click event listener to the theme toggle button
    toggleThemeButton.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        localStorage.setItem('theme', bodyElement.classList.contains('dark-mode') ? 'dark' : 'light');
    });
});


// Code for unit conversions

function convertLength() {
    const fromValue = parseFloat(document.getElementById('fromValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    // Conversion logic goes here


    // Example for length conversion (meters to kilometers, etc.)
    let FromInMeters;

    if (fromUnit === 'meter') {
       FromInMeters = fromValue;
    } else if (fromUnit === 'kilometer') {
       FromInMeters = fromValue * 1000;
    } else if (fromUnit === 'centimeter') {
       FromInMeters = fromValue * 0.01;
    } else if (fromUnit === 'millimeter') {
       FromInMeters = fromValue * 0.001;
    } else if (fromUnit === 'yard') {
       FromInMeters = fromValue * 0.9144;
    } else if (fromUnit === 'mile') {
       FromInMeters = fromValue * 1609.344;
    } else if (fromUnit === 'foot') {
       FromInMeters = fromValue * 0.3048;
    } else if (fromUnit === 'inch') {
       FromInMeters = fromValue * 0.0254;
    } else if (fromUnit === 'micrometer') {
       FromInMeters = fromValue * 1e-6;
    } else {
        return "Invalid fromUnit";
    }

    // Convert from meters to toUnit
    let result;

    if (toUnit === 'meter') {
        result =FromInMeters;
    } else if (toUnit === 'kilometer') {
        result =FromInMeters / 1000;
    } else if (toUnit === 'centimeter') {
        result =FromInMeters / 0.01;
    } else if (toUnit === 'millimeter') {
        result =FromInMeters / 0.001;
    } else if (toUnit === 'yard') {
        result =FromInMeters / 0.9144;
    } else if (toUnit === 'mile') {
        result =FromInMeters / 1609.344;
    } else if (toUnit === 'foot') {
        result =FromInMeters / 0.3048;
    } else if (toUnit === 'inch') {
        result =FromInMeters / 0.0254;
    } else if (toUnit === 'micrometer') {
        result =FromInMeters / 1e-6;
    } else {
        return "Invalid toUnit";
    }

    document.getElementById('lengthResult').textContent = `Result: ${result}`;
}

function convertTemperature() {
    const fromValue = parseFloat(document.getElementById('temperatureFromValue').value);
    const fromUnit = document.getElementById('temperatureFromUnit').value;
    const toUnit = document.getElementById('temperatureToUnit').value;

    // Conversion logic for temperature goes here
    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (fromValue * 9 / 5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (fromValue - 32) * 5 / 9;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = (fromValue + 273.15);
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = (fromValue - 273.15);
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (5 / 9 * (fromValue - 32) + 273.15);
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (9 / 5 * (fromValue - 273.15) + 32);
    }
    document.getElementById('temperatureResult').textContent = `Result: ${result}`;
}

function convertArea() {
    const fromValue = parseFloat(document.getElementById('areaFromValue').value);
    const fromUnit = document.getElementById('areaFromUnit').value;
    const toUnit = document.getElementById('areaToUnit').value;

    // Conversion logic for area goes here

    let squareMeters;

    // Convert to square meters based on the fromUnit
    if (fromUnit === 'squareMeter') {
        squareMeters = fromValue;
    } else if (fromUnit === 'squareKilometer') {
        squareMeters =fromValue * 1e6;
    } else if (fromUnit === 'squareFoot') {
        squareMeters =fromValue * 0.092903;
    } else if (fromUnit === 'squareInch') {
        squareMeters =fromValue * 0.00064516;
    } else if (fromUnit === 'acre') {
        squareMeters =fromValue * 4046.86;
    } else if (fromUnit === 'hectare') {
        squareMeters =fromValue * 10000;
    } else {
        return "Invalid fromUnit";
    }

    // Convert from square meters to the target unit
    let result;

    if (toUnit === 'squareMeter') {
        result = squareMeters;
    } else if (toUnit === 'squareKilometer') {
        result = squareMeters / 1e6;
    } else if (toUnit === 'squareFoot') {
        result = squareMeters / 0.092903;
    } else if (toUnit === 'squareInch') {
        result = squareMeters / 0.00064516;
    } else if (toUnit === 'acre') {
        result = squareMeters / 4046.86;
    } else if (toUnit === 'hectare') {
        result = squareMeters / 10000;
    } else {
        return "Invalid fromUnit";
    }
    document.getElementById('areaResult').textContent = `Result: ${result}`;
}


function convertVolume() {
    const fromValue = parseFloat(document.getElementById('volumeFromValue').value);
    const fromUnit = document.getElementById('volumeFromUnit').value;
    const toUnit = document.getElementById('volumeToUnit').value;

    // Conversion logic for volume goes here

    let result;

    if (fromUnit === 'cubicMeter') {
        valueInCubicMeters = fromValue;
    } else if (fromUnit === 'cubicCentimeter') {
        valueInCubicMeters = fromValue * 1e-6;
    } else if (fromUnit === 'litre') {
        valueInCubicMeters = fromValue * 0.001;
    } else if (fromUnit === 'millilitre') {
        valueInCubicMeters = fromValue * 1e-6;
    } else if (fromUnit === 'gallon') {
        valueInCubicMeters = fromValue * 0.00378541;
    } else if (fromUnit === 'cubicMillimeter') {
        valueInCubicMeters = fromValue * 1e-9;
    } else {
        return ('Unsupported fromUnit');
    }

    // Convert cubic meters to the target unit
    if (toUnit === 'cubicMeter') {
        result = valueInCubicMeters;
    } else if (toUnit === 'cubicCentimeter') {
        result = valueInCubicMeters * 1e6;
    } else if (toUnit === 'litre') {
        result = valueInCubicMeters * 1000;
    } else if (toUnit === 'millilitre') {
        result = valueInCubicMeters * 1e6;
    } else if (toUnit === 'gallon') {
        result = valueInCubicMeters / 0.00378541;
    } else if (toUnit === 'cubicMillimeter') {
        result = valueInCubicMeters * 1e9;
    } else {
       return ('Unsupported toUnit');
    }
   
    document.getElementById('volumeResult').textContent = `Result: ${result}`;
}



function convertWeight() {
    const fromValue = parseFloat(document.getElementById('weightFromValue').value);
    const fromUnit = document.getElementById('weightFromUnit').value;
    const toUnit = document.getElementById('weightToUnit').value;

    // Conversion logic for weight goes here


   // Convert from the source unit to grams
   if (fromUnit === "kilogram") {
    grams = fromValue * 1000; 
  } else if (fromUnit === "gram") {
    grams = fromValue; 
  } else if (fromUnit === "milligram") {
    grams = fromValue / 1000; 
  } else if (fromUnit === "ton") {
    grams = fromValue * 1e6; 
  } else if (fromUnit === "ounces") {
    grams = fromValue * 28.3495;
  } else if (fromUnit === "pound") {
    grams = fromValue * 453.592; 
  } else {
    return "Invalid input unit";
  }

  // Convert from grams to the target unit
  let result;
  if (toUnit === "kilogram") {
    result = grams / 1000; 
  } else if (toUnit === "gram") {
    result = grams; 
  } else if (toUnit === "milligram") {
    result = grams * 1000; 
  } else if (toUnit === "ton") {
    result = grams / 1e6; 
  } else if (toUnit === "ounces") {
    result = grams / 28.3495; 
  } else if (toUnit === "pound") {
    result = grams / 453.592;
  } else {
    return "Invalid target unit"; 
  }

   
    document.getElementById('weightResult').textContent = `Result: ${result}`;
}