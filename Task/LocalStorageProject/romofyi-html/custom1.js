let data = JSON.parse(localStorage.getItem("StudentDetail"));
for(let i =0;i<data.studentinfo.length;i++){
    document.getElementById("category").innerHTML+="<li class='nav-item active'><a class='nav-link' href='index.html'>"+data.studentinfo[i].name+"</a></li>"
}