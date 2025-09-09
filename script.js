
var rates = {
    "USD": { "INR": 86, "EUR": 0.92, "USD": 1 },
    "INR": { "USD": 0.012, "EUR": 0.011, "INR": 1 },
    "EUR": { "USD": 1.09, "INR": 90, "EUR": 1 }
};

function convertCurrency(event) {
    event.preventDefault(); 

   
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;
    var result = document.getElementById("result");
    amount = parseFloat(amount);


    if (amount > 0) {
        var rate = rates[fromCurrency][toCurrency];
        var converted = amount * rate;
        result.textContent = amount + " " + fromCurrency + " = " + converted.toFixed(2) + " " + toCurrency;
    } else {
        result.textContent = "Please enter a valid amount.";
    }
}
document.getElementById("currencyForm").addEventListener("submit", convertCurrency);
