

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function fibonacciSeries(n) {

    let series = [];

    if (n === 1) {

        series.push(0);


    } else if (n >= 2) {

        series.push(0, 1);

        for (let i = 2; i < n; i++) {

            series.push(series[i - 1] + series[i - 2]);

        }
    }

    return series;
}

let number = 5;
let result = factorial(number);

console.log("Factorial of " + number + " is : " + result);

let count = 10;
let fibonacci = fibonacciSeries(count);

console.log("Fibonacci series of " + count + " numbers is : " + fibonacci);