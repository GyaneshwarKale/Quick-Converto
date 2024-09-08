const lengthForm = document.getElementById('length');
const temperatureForm = document.getElementById('temperature');
const areaForm = document.getElementById('area');
const weightForm = document.getElementById('weight');
const timeForm = document.getElementById('time');

temperatureForm.style.display = "";
lengthForm.style.display = "none";
areaForm.style.display = "none";
weightForm.style.display = "none";
timeForm.style.display = "none";

const conversionCategory = document.getElementById('conversionCategory');

conversionCategory.addEventListener('change', function() {
    const conversionValue = conversionCategory.value;

    if (conversionValue === "temperature") {
        temperatureForm.style.display = "";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "none";
    } else if (conversionValue === "length") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "none";
    } else if (conversionValue === "area") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "";
        weightForm.style.display = "none";
        timeForm.style.display = "none";   
    } else if (conversionValue === "weight") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "";
        timeForm.style.display = "none";   
    } else if (conversionValue === "time") {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "";   
    } else {
        temperatureForm.style.display = "none";
        lengthForm.style.display = "none";
        areaForm.style.display = "none";
        weightForm.style.display = "none";
        timeForm.style.display = "none";
    };
});

function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromTemperatureUnit").value;
    const toUnit = document.getElementById("toTemperatureUnit").value;

    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputValue * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9/5 + 32;
    } else {
        result = inputValue;
    }

    document.getElementById("temperatureResult").textContent = `Result: ${result.toFixed(2)}`;
};

function convertArea() {
    const inputValue = parseFloat(document.getElementById("areaInput").value);
    const fromUnit = document.getElementById("fromAreaUnit").value;
    const toUnit = document.getElementById("toAreaUnit").value;

    const conversionFactors = {
        sqMeter: 1,
        sqKilometer: 0.000001,
        sqCentimeter: 10000,
        sqMillimeter: 1000000,
    };

    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    document.getElementById("areaResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function convertWeight() {
    const inputValue = parseFloat(document.getElementById("weightInput").value);
    const fromUnit = document.getElementById("fromWeightUnit").value;
    const toUnit = document.getElementById("toWeightUnit").value;

    const conversionFactors = {
        gram: 1,
        kilogram: 0.001,
        milligram: 1000,
    };

    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    document.getElementById("weightResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function convertLength() {
    const inputValue = parseFloat(document.getElementById("lengthInput").value);
    const fromUnit = document.getElementById("fromLengthUnit").value;
    const toUnit = document.getElementById("toLengthUnit").value;

    const conversionFactors = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
    };

    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    document.getElementById("lengthResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

function convertTime() {
    const inputValue = parseFloat(document.getElementById("timeInput").value);
    const fromUnit = document.getElementById("fromTimeUnit").value;
    const toUnit = document.getElementById("toTimeUnit").value;

    const conversionFactors = {
        second: 1,
        millisecond: 1000,
        minute: 1 / 60,
        hour: 1 / 3600,
    };

    const result = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    document.getElementById("timeResult").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}