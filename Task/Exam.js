dispdata()
document.getElementById("save").addEventListener("click", function () {
    let name = document.getElementById("EmpName").value;
    let salary = document.getElementById("EmpSal").value;
    let jd = document.getElementById("EmpDes").value;
    let cid = document.getElementById("cid").value;
    let qualification = document.getElementsByName("qual");

    let qual = [];
    for (let i = 0; i < qualification.length; i++) {
        if (qualification[i].checked == true) {
            qual.push(qualification[i].value)
        }
    }

    let data = {};

    let Empdet = localStorage.getItem("EmpDetail");
    if (Empdet != null) {
        if (cid != null) {
            for (let i = 0; i < Empdet.Empinfo.length; i++) {
                if (cid == Empdet.Empinfo[i].id) {
                    Empdet.Empinfo[i].name = name;
                    Empdet.Empinfo[i].salary = salary;
                    Empdet.Empinfo[i].JobDes = jd;
                    Empdet.Empinfo[i].qualifications = qualification;
                }
            }
        }
        else {
            let len = Empdet.Empinfo.length;
            let info = {
                id: len + 1,
                name: name,
                salary: salary,
                JobDes: jd,
                qualifications: qual
            }
            Empdet.Empinfo.push(info);
            localStorage.setItem("EmpDetail", JSON.stringify(Empdet))
        }
    }
    else {
        let info = {
            id: 1,
            name: name,
            salary: salary,
            JobDes: jd,
            qualifications: qual
        }
        data.Empinfo = [info];
        localStorage.setItem("EmpDetail", JSON.stringify(data));
    }
    document.getElementById("userfrm").reset();
    dispdata();
})


function dispdata() {
    let row = '';
    let data = JSON.parse(localStorage.getItem("EmpDetail"));
    if (data != null && data.Empinfo.length > 0) {

        row += `<tr>   
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Job Designation</th>
            <th>Job Qualification</th>
            <th>Action</th>`


        for (let i = 0; i < data.Empinfo.length; i++) {
            row += "<tr>"
            row += "<td>" + data.Empinfo[i].id + "</td>"
            row += "<td>" + data.Empinfo[i].name + "</td>"
            row += "<td>" + data.Empinfo[i].salary + "</td>"
            row += "<td>" + data.Empinfo[i].JobDes + "</td>"
            row += "<td>" + data.Empinfo[i].qualifications + "</td>"
            row += "<td><input type='button' value='Edit' onclick='editData(" + data.Empinfo[i].id + ")'><input type='button' value='Delete' onclick='DelData(" + data.Empinfo[i].id + ")'></td>"
            row += "</tr>"
        }
        document.getElementById("userdata").innerHTML = row;
    }
}
function DelData(id) {
    let data = JSON.parse(localStorage.getItem("EmpDetail"));
    if (data != null && data.Empinfo.length > 0) {
        let id1 = id - 1;
        data.Empinfo.splice(id1, 1);
    
    let j = 1;
    for (let i = 0; i < data.Empinfo.length; i++) {
        data.Empinfo[i].id = j;
        j++
    }
    localStorage.setItem("EmpDetail", JSON.stringify(data));
    dispdata();
}
}
function editData(id) {
    let data = JSON.parse(localStorage.getItem("EmpDetail"));
    if (data != null) {
        for (let i = 0; i < data.Empinfo.length; i++) {
            if (id === data.Empinfo[i].id) {
                document.getElementById("EmpName").value = data.Empinfo[i].name;
                document.getElementById("EmpSal").value = data.Empinfo[i].salary;
                document.getElementById("EmpDes").value = data.Empinfo[i].JobDes;

                let q = data.Empinfo[i].qualifications;
                let q1 = document.getElementsByName("qual");
                for (let j = 0; j < q1.length; j++) {
                    if (q.includes(q1[j].value)) {
                        q1[j].checked=true;
                    }
                }
                document.getElementById("cid").value = data.Empinfo[i].id;
            }
        }
    }
}

