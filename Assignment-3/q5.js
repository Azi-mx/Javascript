let Unit = prompt("Enter Units : ");

Unit = parseInt(Unit);

if (Unit >= 1 && Unit <= 50) {   

    Bill = (Unit * 0.50);

    document.write("Bill is : " + Bill);

} else if (Unit > 50 && Unit <= 150) { 

    Bill = (25 + ((Unit - 50) * 0.75));

    document.write("Bill is : " + Bill);

}

else if (Unit > 150 && Unit <= 250) {   

    Bill = (25 + 75 + ((Unit - 150) * 1.25));

    document.write("Bill is : " + Bill);

} else {   

    Bill = (25 + 75 + 120 + ((Unit - 250) * 1.50));

    document.write("Bill is : " + Bill);

}

surcharge = Bill * 20 / 100;

document.write("<br> Total Bill is : " + (Bill + surcharge));