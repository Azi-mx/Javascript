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




DisplayCart()
function AddToCart(id) {
    
    let data2 = JSON.parse(localStorage.getItem("ProData"))

    let data3 = JSON.parse(localStorage.getItem("cartInfo"))

    let detail1 = {}

        if (data3 != null) {
            alert("yes")
            let cartdet = data3.cart.find(function (e){
                return e.id == id
            })
            if(cartdet != null) {
                for(let j = 0; j < data3.cart.length; j++) {
                    if(data3.cart[j].id == id){
                        data3.cart[j].Qty+=1;
                        data3.cart[j].Price = parseInt(data3.cart[j].Qty * data3.cart[j].Price)
                    }
                }
            

            localStorage.setItem('cartInfo',JSON.stringify(data3))
            } else{
                //push 
                alert("also")
                for(let i = 0; i < data2.ProDetails.length; i++) {    
                if(id == data2.ProDetails[i].pid) {
                let len = data3.cart.length;
                let detail = {
                    id: len + 1,
                    pid:data2.ProDetails[i].pid,
                    CName: data2.ProDetails[i].catid,
                    Name: data2.ProDetails[i].PName,
                    Price: data2.ProDetails[i].PPrice,
                    Image: data2.ProDetails[i].PImg,
                    Qty: data2.ProDetails[i].quantity
                }
                data3.cart.push(detail)
                localStorage.setItem("cartInfo", JSON.stringify(data3))
            }
        }
    }
        DisplayCart()
    }
    //First Time Display
        else {
            for (let i = 0; i < data2.ProDetails.length; i++) {
            if(id == data2.ProDetails[i].pid) {
                alert("else blovk")
                let detail = {
                    id: 1,
                    pid:data2.ProDetails[i].pid,
                    CName: data2.ProDetails[i].catid,
                    Name: data2.ProDetails[i].PName,
                    Price: data2.ProDetails[i].PPrice,
                    Image: data2.ProDetails[i].PImg,
                    Qty: data2.ProDetails[i].quantity
                }
                detail1.cart = [detail];
            }
        }
        
        localStorage.setItem("cartInfo", JSON.stringify(detail1));
        DisplayCart()
    }
    
}
function DisplayCart() {
    let data3 = JSON.parse(localStorage.getItem("cartInfo"))
    let tr = '';

    if (data3 != null) {
        tr +=
            `<thead>
            <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Quantity</th>
            <th>Action</th>
            </tr>
            <thead>`
        for (let i = 0; i < data3.cart.length; i++) {
            tr += `<tbody>
            <tr>
            <td>${data3.cart[i].Name}</td>
            <td>$${data3.cart[i].Price}</td>
            <td><img id='img' src='${data3.cart[i].Image}'</td>
            <td>${data3.cart[i].Qty}</td>
            <td><input type='button' value='Delete' onclick='delData(${data3.cart[i].id})'></td>
            </tr>
            </tbody>`
        }
        document.getElementById("table").innerHTML = tr;
    }
}
        function delData(id){
            let data = JSON.parse(localStorage.getItem("cartInfo"))
            if(data !=null && data.cart.length>0){
                let id1 = id-1;
                data.cart.splice(id1,1);
                let j=1;
                for(let i=0;i<data.cart.length;i++){
                    data.cart[i].id = j;
                    j++;
                }
                localStorage.setItem("cartInfo",JSON.stringify(data));
                DisplayCart();
            }
            }

// <td class='border border-end'><center class='border'><button class='border ' id='decrement-count' style='outline:none;'> - </button> &nbsp;<span id='total-count'></span> &nbsp;<button class='border' id='increment-count' style='outline:none;'> + </button></center></td>
           
// const totalCount = document.getElementById("total-count");

// // Variable to track count
// var count = 0;

// // Display initial count value
// totalCount.innerHTML = count;

// // Function to increment count
// const handleIncrement = () => {
//     count++;
//     totalCount.innerHTML = count;
// };

// // Function to decrement count
// const handleDecrement = () => {
//     count--;
//     totalCount.innerHTML = count;
// };

// // Select increment and decrement buttons
// const incrementCount = document.getElementById("increment-count");
// const decrementCount = document.getElementById("decrement-count");

// // Add click event to buttons
// incrementCount.addEventListener("click", handleIncrement);
// decrementCount.addEventListener("click", handleDecrement);






