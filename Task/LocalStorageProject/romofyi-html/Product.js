let data = JSON.parse(localStorage.getItem("CategoryInfo"));
let row = '';
if (data != null && data.Category.length > 0) {
    for (let i = 0; i < data.Category.length; i++) {
        row += "<option value=" + data.Category[i].id + ">" + data.Category[i].name;
        row += "</option>";
    }
    document.getElementById("addsel").innerHTML = row;
}

document.getElementById("ProdImg").addEventListener("change", function () {

    let ProdImg = document.getElementById("ProdImg");

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
