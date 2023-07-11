let data = JSON.parse(localStorage.getItem("CategoryInfo"));
for (let i = 0; i < data.Category.length; i++) {
    document.getElementById("dp").innerHTML += `<li><a class="dropdown-item" href="#">${data.Category[i].name}</a></li>`
}
let data1 = JSON.parse(localStorage.getItem("ProData"));
 for(let i = 0; i < data1.ProDetails.length; i++) {
     document.getElementById("product").innerHTML+= `<div class="project_box">
                  <div class="dark_white_bg"><img src="
                  ${data1.ProDetails[i].PImg}" alt="#" /></div>
                  <h3>${data1.ProDetails[i].PName} 
                  <br> <center>$${data1.ProDetails[i].PPrice}<center>
                  <button type="button" class="btn mt-4 btn-success">Add To Cart</button></h3>
               </div>`
 }




