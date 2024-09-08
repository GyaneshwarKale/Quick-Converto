function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const conversionRates = {
        usd: {
            eur: 0.92,
            gbp: 0.79,
            inr: 83.46,
            cny: 7.24
        },
        eur: {
            usd: 1.09,
            gbp: 0.85,
            inr: 90.61,
            cny: 7.86
        },
        gbp: {
            usd: 1.27,
            eur: 1.17,
            inr: 106.30,
            cny: 9.22
        },
        inr: {
            usd: 0.012,
            eur: 0.011,
            gbp: 0.0094,
            cny: 0.087
        },
        cny: {
            usd: 0.14,
            eur: 0.13,
            gbp: 0.11,
            inr: 11.74
        }
    };

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = "Cannot convert between the same currency.";
        return;
    }

    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
        document.getElementById('result').innerText = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
    }
    
    else {
        document.getElementById('result').innerText = "Conversion rate not available.";
    }
}