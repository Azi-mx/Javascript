let salary = prompt("Enter Salary : ");

let total_sal;

salary = parseInt(salary);

if (salary >= 1000 && salary <= 5000) {
    
    total_sal = salary + 1000;
    document.write("Total salary :" + total_sal);

} else if (salary > 5000 && salary <= 10000) {

    total_sal = salary + 2000;
    document.write("Total salary :" + total_sal);

} else if (salary > 10000 && salary <= 20000) {

    total_sal = salary + 3000;
    document.write("Total salary :" + total_sal);

} else if (salary > 20000 && salary <= 50000) {

    total_sal = salary + 4000;
    document.write("Total salary :" + total_sal);

} else {

    document.write("Total salary :" + salary);
    
}
