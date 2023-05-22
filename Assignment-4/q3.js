

function meterToFoot(meter) {

    return meter * 3.28084;

}

function celsiusToFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;

}

function DollarToRupees(dollar) {

    return dollar * 75;

}

let meter = 10;
let foot = meterToFoot(meter);

console.log(meter + " meters = " + foot + " feet");

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + "°C = " + fahrenheit + "°F");

let dollar = 50;
let rupees = DollarToRupees(dollar);

console.log("$" + dollar + " = ₹" + rupees);