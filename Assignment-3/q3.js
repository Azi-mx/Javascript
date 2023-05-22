let a = 10;
let b = 20;
let c = 15;
let d = 25;

let max = a;

if (b > max) {

    if (b > c) {

        if (b > d) {

            max = b;

        } else {

            max = d;

        }

    } else if (c > d) {

        max = c;

    } else {

        max = d;

    }

} else if (c > max) {

    if (c > d) {

        max = c;

    } else {

        max = d;

    }

} else if (d > max) {

    max = d;    

}

document.write("Maximum Value is : "+max);
