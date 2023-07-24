
window.onload = function () {

    document.getElementById("email").focus();
    document.getElementById("uname").focus();

}


function validateForm() {
    let name = document.userform.uname.value;
    let email = document.userform.email.value;
    let pass = document.userform.pass.value;
    let cpass = document.userform.cpass.value;

    // This is for Name

    if (name == "") {
        ;
        document.userform.uname.focus();
        document.getElementById("errName").innerHTML = "Please enter username";
        document.getElementById("errName").style.color = "red";
        return false;
    } else {
        document.getElementById("errName").innerHTML = "";
    }

    if (name.length < 2) {
        document.userform.uname.focus();
        document.getElementById("errName").innerHTML = "Name must be >2 character";
        document.getElementById("errName").style.color = "red";
        return false;
    } else {
        document.getElementById("errName").innerHTML = "";
    }

    // This is for email address

    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var ans = pattern.test(email);

    if (ans == false) {
        document.userform.email.focus();
        document.getElementById("errEmail").innerHTML = "Please enter valid email";
        document.getElementById("errEmail").style.color = "red";
        return false;
    } else {
        document.getElementById("errEmail").innerHTML = "";
    }

    // This is for Password

    if (pass == "") {
        document.userform.pass.focus();
        document.getElementById("errPass").innerHTML = "Please enter password";
        document.getElementById("errPass").style.color = "red";
        return false;
    } else {
        document.getElementById("errPass").innerHTML = "";
    }

    var passwo = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var ans = passwo.test(pass);

    if (ans == false) {
        document.userform.pass.focus();
        document.getElementById("errPass").innerHTML =
            "Please enter valid password";
        document.getElementById("errPass").style.color = "red";
        return false;
    } else {
        document.getElementById("errPass").innerHTML = "";
    }

    // This is for Confirm Password

    if (cpass == "") {
        document.userform.cpass.focus();
        document.getElementById("errcPass").innerHTML = "Please Enter confirm password";
        document.getElementById("errcPass").style.color = "red";
        return false;
    } else {
        document.getElementById("errcPass").innerHTML = "";
    }

    // This is for password comparision

    if (pass != cpass) {
        document.userform.cpass.focus();
        document.getElementById("errcPass").innerHTML =
            "Please Enter Same password";
        document.getElementById("errcPass").style.color = "red";
        return false;
    } else {
        document.getElementById("errcPass").innerHTML = "";
    }

    // This is for first letter is capital in password

    let capital = pass.charAt(0);
    if (capital >= "a" && capital <= "z") {
        document.userform.pass.focus();
        document.getElementById("errPass").innerHTML =
            "First character must be capital";
        document.getElementById("errPass").style.color = "red";
        return false;
    }

    let ff = {};

    let pp =  JSON.parse(localStorage.getItem("signupsavedata"));

    
    let signdata = {

        upname: name,
        upemail: email,
        uppass: pass

    }

    if(pp != null){

        signdata = {

            upname: name,
            upemail: email,
            uppass: pass
    
        }

        pp.push(signdata);
        ff = pp;
        localStorage.setItem("signupsavedata",JSON.stringify(ff));

    }else{

        localStorage.setItem("signupsavedata",JSON.stringify([signdata]));

    }

    

    document.userform.reset();

    return true;

    let signp = new Promise((rs, rj) => {

        setTimeout(() => {

            rs(location.href = 'index.html');

        }, 500);

    });

    return signp;


}

document.getElementById("log").addEventListener("click", () => {
    let pass1 = document.Lform.pass.value;
    let email = document.Lform.email.value;
    let ldata = JSON.parse(localStorage.getItem("signupsavedata"));  

    if(ldata != null){

        for(let i = 0; i < ldata.length; i++){

            if(ldata[i].upemail == email && ldata[i].uppass == pass1){

                let fpromise = new Promise((rs, rj) => {

                    setTimeout(() => {
        
                        rs(location.href = 'index.html');
        
                    }, 500);
        
                });
        
                console.log("Login Successfully...");
                document.getElementById("errorEmail").innerHTML = '';
                document.getElementById("errorPassword").innerHTML = '';
                document.Lform.reset();
        
                return fpromise;

            }else{

                if (ldata[i].upemail !== email) {
                    document.Lform.email.focus();
                    document.getElementById("errorEmail").innerHTML = "Email is not register";
                    document.getElementById("errorEmail").style.color = "red";
                    return false;
                } else {
                    document.getElementById("errorEmail").innerHTML = "";
                }
            
                if (ldata[i].uppass != pass1) {
                    document.Lform.pass.focus();
                    document.getElementById("errorPassword").innerHTML = "Enter Valid password";
                    document.getElementById("errorPassword").style.color = "red";
                    return false;
                } else {
                    document.getElementById("errorPassword").innerHTML = "Enter Valid password";
                }

            }   

        }

    }

    
});
