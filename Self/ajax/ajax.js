function loadData(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           document.getElementById("id").innerHTML = this.responseText;
        }
    };


    xhttp.open("GET","read.txt","true");
    xhttp.send();
}