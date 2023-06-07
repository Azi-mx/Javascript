// function loadData(){
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//            document.getElementById("id").innerHTML = this.responseText;
//         }
//     };


//     xhttp.open("GET","read.txt","true");
//     xhttp.send();
// }


//Fetch Method

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);  
//     for(let a in data){
//         document.write(`${data[a].name} - ${data[a].email} - ${data[a].address.city} <br>`);
//     }
// })
// .catch((error)=>{
//     document.write("Cant do it");
// })

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));