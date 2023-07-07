

document.getElementById("savecat").addEventListener("click", () => {

    let catname = document.myfrm.catname.value;
    let cid = document.myfrm.cid.value;


    let data = {};


    let Category = JSON.parse(localStorage.getItem("CategoryInfo"));
    if (Category != null) {
        //Here the details are edited and saved in the info object...!
        if (cid != '') {
            for (let i = 0; i < Category.Category.length; i++) {
                if (cid == Category.Category[i].id) {
                    Category.Category[i].name = catname;
                }
            }

        }
        else {
            let len = Category.Category.length;
            let catdata = {
                id: len + 1,
                name: catname
            }
            Category.Category.push(catdata);
        }
        localStorage.setItem("CategoryInfo",JSON.stringify(Category));
    }
    else {
        let catdata = {
            id:1,
            name:catname
    }
    data.Category = [catdata];
    localStorage.setItem("CategoryInfo",JSON.stringify(data));
    }
    document.myfrm.catname.value = "";
    dispdata();
})
function dispdata() {
    let dt = '';
    let info = JSON.parse(localStorage.getItem("CategoryInfo"));
    if (info != null && info.Category.length > 0) {
        dt =
            `<tr> 
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                </tr>`;

        for (let i = 0; i < info.Category.length; i++) {
            dt += "<tr>";
            dt += "<td>" + info.Category[i].id + "</td>";
            dt += "<td>" + info.Category[i].name + "</td>";
            dt += "<td><input type='button' name='btnedit' id='btnedit' value = 'Edit' onclick='showdet(" + info.Category[i].id + ")'><input type='button' name='btndel' id='btndel' onclick='deleteArray(" + info.Category[i].id+ ")' value = 'delete'></td>"
            dt += "</tr>";
        }
        document.getElementById("userdata").innerHTML = dt;
    }


}

function deleteArray(index) {
    let detail = JSON.parse(localStorage.getItem("CategoryInfo"));
    if(detail != null && detail.Category.length > 0){
        let id1 = index-1;
        detail.Category.splice(id1,1);
        let j=1;
        for(let i=0;i<detail.Category.length;i++){
            detail.Category[i].id = j;
            j++;
        }
        localStorage.setItem("CategoryInfo",JSON.stringify(detail));
        dispdata();
    }
}
    





function showdet(index) {
      let detail = JSON.parse(localStorage.getItem("CategoryInfo"));
    if(detail != null){
        console.log(detail);
        for(let i=0;i<detail.Category.length;i++){
            if(index == detail.Category[i].id){
                document.myfrm.catname.value = detail.Category[i].name;
                document.myfrm.cid.value= detail.Category[i].id;
            }
        }
        
    }
}
dispdata();
