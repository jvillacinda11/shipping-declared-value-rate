function calculate(event) {
    event.preventDefault();

    let total = parseFloat(document.getElementById("cartTotal").value);

    if (isNaN(total)) { 
        alert("You must enter a number value!");
    }
    else {
        let rate;
        if (total > 100 && total < 300) {
            rate = 4.35;
        }
        else if (total >= 300) {
            let totalRemainder = total % 100;
            if (totalRemainder !== 0) {
                let adjTotal = total - totalRemainder + 100;
                rate = (adjTotal * 0.0145).toFixed(2);
            }
            else {
                rate = (total * 0.0145).toFixed(2);
            }
        }

        if (rate !== undefined) {
            let formattedRate = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(rate);

            let output = document.getElementById("output");
            output.innerText = `Rate: ${formattedRate}`;
        }
    }
}