// let data = JSON.parse(localStorage.getItem("CategoryInfo"));
// for (let i = 0; i < data.Category.length; i++) {
//     document.getElementById("category").innerHTML += "<li class='nav-item active'><a class='nav-link' href='index.html'>" + data.Category[i].name + "</a></li>"
// }
let data1 = JSON.parse(localStorage.getItem("ProData"));
 for(let i = 0; i < data1.ProDetails.length; i++) {
     document.getElementById("product").innerHTML+= `<div class="project_box">
                  <div class="dark_white_bg"><img src="
                  ${data1.ProDetails[i].PImg}" alt="#" /></div>
                  <h3>Short Openwork Cardigan $120.00</h3>
               </div>`
 }



