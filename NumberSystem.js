function convertNumber() {
    let numberSystem = document.getElementById("numberSystem").value;
    let inputNumber = document.getElementById("inputNumber").value;

    convertNumberSystems(numberSystem, inputNumber);
}

function convertNumberSystems(numberSystem, inputNumber) {
    let base;
    switch (numberSystem) {
      case 'binary':
        base = 2;
        break;
      case 'octal':
        base = 8;
        break;
      case 'decimal':
        base = 10;
        break;
      case 'hexadecimal':
        base = 16;
        break;
    }

    let decimal = parseInt(inputNumber, base);

    if (inputNumber.includes('.')) {
      let fractionalPart = inputNumber.split('.')[1];
      let fractionalDecimal = parseInt(fractionalPart, base) / Math.pow(base, fractionalPart.length);
      decimal += fractionalDecimal;
    }

    let binary = decimal.toString(2);

    let octal = decimal.toString(8);

    let hexadecimal = decimal.toString(16).toUpperCase();

    document.getElementById('binary').textContent = (numberSystem !== 'binary') ? 'Binary: '+ binary : '';
    document.getElementById('octal').textContent = (numberSystem !== 'octal') ? 'Octal: '+ octal : '';
    document.getElementById('decimal').textContent = (numberSystem !== 'decimal') ? 'Decimal: ' + decimal : '';
    document.getElementById('hexadecimal').textContent = (numberSystem !== 'hexadecimal') ? 'Hexadecimal: '+ hexadecimal : '';
}