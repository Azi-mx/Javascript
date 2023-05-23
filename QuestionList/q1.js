var a= [23,33,45,43,12];
let maximum=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>maximum){
        maximum = a[i];
    }
}
console.log("The max number is "+ maximum);
//Question 2
var b = [1,3,5,7,9];
let d = b.map(function(val){
    if(val%2==0){
        console.log("It's an even num and number is "+ val);
    }
    else{
        console.log("It's an odd num and number is "+ val);
    }
})

//Question 3
var b = [1,3,5,7,9];
let c = b.map(function(val){
    return val*2;
})
let f = b.map(function(val){
    return val*3;
})
console.log("Array multiplied by 2 : " + c);
console.log("Array multiplied by 3 : " + f);


var a= [23,33,45,43,12];
let mess = a.filter(function(val){
    if(val===45){
        return val;
    }
})

console.log("Array filtered to find number : " + mess);




var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let ValCount = pets.reduce(function(TV,CV){
    if(!TV[CV]){
        TV[CV]=1;
    }
    else{
        TV[CV]++;
    }
    return TV;
},{})
console.log(ValCount);



