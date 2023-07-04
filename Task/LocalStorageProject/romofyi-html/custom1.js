let data = JSON.parse(localStorage.getItem("CategoryInfo"));
for(let i =0;i<data.Category.length;i++){
    document.getElementById("category").innerHTML+="<li class='nav-item active'><a class='nav-link' href='index.html'>"+data.Category[i].name+"</a></li>"
}