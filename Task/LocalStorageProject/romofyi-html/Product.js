let data = JSON.parse(localStorage.getItem("CategoryInfo"));
let row = '';
if (data != null && data.Category.length > 0) {
    for (let i = 0; i < data.Category.length; i++) {
        row += "<option value=" + data.Category[i].id + ">" + data.Category[i].name;
        row += "</option>";
    }
    document.getElementById("addsel").innerHTML = row;
}

document.getElementById("ProImg").addEventListener("change", function () {

    let ProdImg = document.getElementById("ProImg");

    if (ProdImg.files && ProdImg.files[0]) {
        let read = new FileReader();
        read.readAsDataURL(ProdImg.files[0]);
        read.addEventListener("load", function () {
            // console.log("Image is " + read.result)
            localStorage.setItem("ProductImage",read.result);
            document.getElementById("ProdImg").src = read.result;
        })
    }else{
        alert('jk');
    }
})

document.getElementById("SaveBtn").addEventListener("click",function(){
    let CategoryID = document.getElementById("addsel").value;
    let Name = document.getElementById("ProName").value;
    let ProPrice = document.getElementById("ProPrice").value;
    let ProImg = localStorage.getItem("ProductImage");

    let ProData = {};

    let details = {
        catid:CategoryID,
        pid:1,
        PName:Name,
        PPrice:ProPrice,
        PImg:ProImg
    }
    
    ProData.ProDetails = [details];
    localStorage.setItem("ProData",JSON.stringify(ProData));
    dispdata();
})


function dispdata(){
    let data = JSON.parse(localStorage.getItem("ProData"));
    if(data!=null){
        let tr = '';
        tr+=`<tr>
                <th>Category Name</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Image</th>
                <th>Action</th>
            </tr>`

            for(let i = 0;i<data.ProDetails.length;i++){
                tr+=`<tr>
                    <td>${data.ProDetails[i].catid}</td>
                    <td>${data.ProDetails[i].pid}</td>
                    <td>${data.ProDetails[i].PName}</td>
                    <td>${data.ProDetails[i].PPrice}</td>
                    <td><img id='img' src='${data.ProDetails[i].PImg}'</td>
                    <td><input type='button' value='Edit' onclick='EditData(${data.ProDetails[i].pid})'><input type='button' value='Delete' onclick='delData(${data.ProDetails[i].pid})'></td>
                    </tr>`
            }
            document.getElementById("ProductDetail").innerHTML = tr;
    }
}


