let data = JSON.parse(localStorage.getItem("CategoryInfo"));
for (let i = 0; i < data.Category.length; i++) {
    document.getElementById("dp").innerHTML += `<li><a class="dropdown-item" href="#">${data.Category[i].name}</a></li>`
}
let data1 = JSON.parse(localStorage.getItem("ProData"));
for (let i = 0; i < data1.ProDetails.length; i++) {
    document.getElementById("product").innerHTML += `<div class="project_box">
                  <div class="dark_white_bg"><img src="
                  ${data1.ProDetails[i].PImg}" alt="#" /></div>
                  <h3>${data1.ProDetails[i].PName} 
                  <br> <center>$${data1.ProDetails[i].PPrice}<center>
                  <button type="button" class="btn mt-4 btn-success" onclick='AddToCart(${data1.ProDetails[i].pid} )'>Add To Cart</button></h3>
               </div>`
}

let data2 = JSON.parse(localStorage.getItem("ProData"))

let data3 = JSON.parse(localStorage.getItem("cartInfo"))

function AddToCart(id) {
    let detail1 = {}
    for (let i = 0; i < data2.ProDetails.length; i++) {
        if (id == data2.ProDetails[i].pid) {
            if (data3 != null) {
                let len = data2.ProDetails.length;
                let detail = {
                    id:len+1,
                }
            }
            else {
                let detail = {
                    id: data2.ProDetails[i].pid,
                    CName: data2.ProDetails[i].catid,
                    Name: data2.ProDetails[i].PName,
                    Price: data2.ProDetails[i].PPrice,
                    Image: data2.ProDetails[i].PImg
                }
                detail1.cart = [detail];
                localStorage.setItem("cartInfo", JSON.stringify(detail1))
            }
        }
    }
    DisplayCart();
}
function DisplayCart() {
    let data3 = JSON.parse(localStorage.getItem("cartInfo"))
    let tr = '';
    
        if (data3 != null) {
            tr += 
            `<tr>
            <th>Category Name</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Action</th>
            </tr>`
        for(let i = 0; i < data3.cart.length; i++) {
            tr+=`<tr>
            <td>${data3.cart[i].CName}</td>
            <td>${data3.cart[i].Name}</td>
            <td>${data3.cart[i].Price}</td>
            <td><img id='img' src='${data3.cart[i].Image}'</td>
            <td><input type='button' value='+' onclick='EditData(${data3.cart[i].id})'><input type='button' value='-' onclick='delData(${data3.cart[i].id})'></td>
            </tr>`
        }
        document.getElementById("table").innerHTML = tr;
        }
    }





