let data = JSON.parse(localStorage.getItem("CategoryInfo"));
let row = '';
if (data != null && data.Category.length > 0) {
    for (let i = 0; i < data.Category.length; i++) {
        row += `<option value="${data.Category[i].name}">${data.Category[i].name}</option>`;
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
            localStorage.setItem("ProductImage", read.result);
            document.getElementById("pimg").value = read.result
            document.getElementById("ProdImg").src = read.result;
        })
    }
})
dispdata();

document.getElementById("SaveBtn").addEventListener("click", function () {
    let CategoryID = document.getElementById("addsel").value;
    let Name = document.getElementById("ProName").value;
    let ProPrice = document.getElementById("ProPrice").value;
    let ProImg = localStorage.getItem("ProductImage");
    let uid = document.getElementById("uid").value
    let path = document.getElementById("pimg").value;

    let ProductData = {};
    let data = JSON.parse(localStorage.getItem("ProData"));
    if (data != null) {
        if (uid != '') {
            for (let i = 0; i < data.ProDetails.length; i++) {
                data.ProDetails[i].PName = Name;
                data.ProDetails[i].PPrice = ProPrice;
                if (path != '') {
                    data.ProDetails[i].PImg = path;
                }
                else {
                    data.ProDetails[i].PImg = localStorage.getItem("ProductImage");
                }
            }

            localStorage.setItem("ProData", JSON.stringify(data));
            document.getElementById("pimg").value = '';
            localStorage.removeItem("ProductImage");

        }
        else {
            let len = data.ProDetails.length;
            let details = {
                catid: CategoryID,
                pid: len + 1,
                PName: Name,
                PPrice: ProPrice,
                PImg: ProImg
            }
            data.ProDetails.push(details);
            localStorage.setItem("ProData", JSON.stringify(data));
            localStorage.removeItem("ProductImage");
            dispdata();
        }

    }

    else {
        let details = {
            catid: CategoryID,
            pid: 1,
            PName: Name,
            PPrice: ProPrice,
            PImg: ProImg
        }
        ProductData.ProDetails = [details];
        localStorage.setItem("ProData", JSON.stringify(ProductData));
        dispdata();
    }
    document.getElementById("prdfrm").reset();
})


function dispdata() {
    let data = JSON.parse(localStorage.getItem("ProData"));
    if (data != null && data.ProDetails.length>0) {
        let tr = '';
        tr += `<tr>
                <th>Category Name</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Image</th>
                <th>Action</th>
            </tr>`

        for (let i = 0; i < data.ProDetails.length; i++) {
            tr += `<tr>
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
function delData(id) {
    let data = JSON.parse(localStorage.getItem("ProData"));
    if (data != null) {
        let id1 = id - 1;
        data.ProDetails.splice(id1, 1);
        let j = 1;
        for (let i = 0; i < data.ProDetails.length; i++) {
            data.ProDetails[i].pid = j
            j++;
        }
        localStorage.setItem("ProData", JSON.stringify(data));
        dispdata();
    }
}

function EditData(id) {
    let data = JSON.parse(localStorage.getItem("ProData"));
    for (let i = 0; i < data.ProDetails.length; i++) {
        if (id == data.ProDetails[i].pid) {
            document.getElementById("ProName").value = PName;
            document.getElementById("ProPrice").value = PPrice;
            document.getElementById("pimg").value = PImg;
            document.getElementById("uid").value = pid;
        }
    }
}