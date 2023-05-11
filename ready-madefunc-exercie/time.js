let today = new Date();
let day = today.getDay();
let daylist = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.write("today is " + daylist[day]);
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? "AM" : "PM";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = 'noon';
    }
    else{
        hour = 12;
        prepand = 'PM';
    }
}
if(hour===0 && prepand==='AM'){
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
document.write("Current Time : " + hour + " : " + minute + " : " + second + prepand );






