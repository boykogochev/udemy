document.getElementById("calculate").onclick = function() {
    /*window.alert('alert!');*/
    var billAmount = document.getElementById('bill-amount').value;
    var serviceQuality = document.getElementById('service-quality').value;
    var numberOfPeople = document.getElementById('number-of-people').value;


    if (billAmount === "" || billAmount <= 0) {
        window.alert('alert!');
        return;
    }


    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById('per-person').style.display = "none";
    } else {
        document.getElementById('per-person').style.display = "block";
    }


    var total = (billAmount * serviceQuality) / numberOfPeople;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    document.getElementById("totalTip").style.display = "block";

};
document.getElementById("totalTip").style.display = "none";
