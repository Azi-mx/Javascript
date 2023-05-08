// let a = 10,b = 20;
// let temp = 0;
// document.write("The value of a =" + a + " and b = " + b + " before <br>");
// temp = a;
// a = b;
// b = temp;
// document.write("The value of a =" + a + " and b = " + b + " after");

const fruits = ["banana", "apple", "kela"];
let flen = fruits.length;
let i;

let text = "<ul>";
for(i=0;i<flen;i++){
    text += "<li>" + fruits[i] + "</li>"
}
text += "</ul>"
document.getElementById('demo').innerHTML= text;