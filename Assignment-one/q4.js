let bas_sal = prompt("Enter your basic salary");
let HRA,DA,TA;
parseInt(bas_sal);
HRA = bas_sal*0.8;
DA = bas_sal*0.5;
TA = bas_sal*0.8;
let add = HRA + DA + TA;
let gr_sal = (bas_sal + add);
document.write("Your gross salary is : "+ gr_sal);

