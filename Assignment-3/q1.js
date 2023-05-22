const x = prompt("Enter a character if you want to Alphabetic , number or special character : ");

if (x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z') {
        document.write("It is an alphabet</br>");
}else if(x >= '0' && x <= '9'){
    document.write("It is a Number</br>");
}else{
    document.write("It is a Special Character</br>");
}