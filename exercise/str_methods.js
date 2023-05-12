//slice Function
let str = "Apple,kiwi";
document.write(str.slice(2,4)+"<br>");
// Replace Function
let str1 = "Azim ,vishal,kuntesh";
document.write(str1.replaceAll(/azim/gi,"Azeem")+"<br>");
//Trim Function
let str2 = "       rahul,amaan, sahil      ";
document.write(str2.length+"<br>");
let str3 = str2.trimStart();
document.write(str3.length+"<br>");
//padStart and padEnd();
let str4 = "gotiya";
str4 = str4.padStart(7,"g");
document.write(str4+"<br>");










