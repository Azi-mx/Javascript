var data = [10,20,30,40,50,60,70];


console.log("addition of all records");
let sum = data.reduce(function(s,v){
    return s+v;
})

console.log(sum);

console.log("printing all records");
let print  = data.forEach(element => {
    console.log(element);
});

let convert = data.toString();
console.log(convert);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log("The index of Apple is : "+index);

fruits.shift();
console.log("After removing banana from the array: ");
let print1 = fruits.forEach(element => {
    console.log(element)

});

fruits.unshift("Gauva");
console.log("After removing banana from the array: ");
let print2 = fruits.forEach(element => {
    console.log(element)
});

let number = [20,40,80,10,30];
let order = number.sort(function(a,b){
    return b-a;
})
console.log(order);




