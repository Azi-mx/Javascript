fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                let output = document.getElementById('data-output');
                let content = "";
               for(let i in json){
                    content += `<tr> 
                    <td>${json[i].id}</td>
                    <td>${json[i].title}</td>
                    <td>${json[i].price}</td>
                    <td id="center">${json[i].description}
                    <div>
                        <button id="btn1">Buy</button></td>
                    </div>
                    <td>${json[i].category}</td>
                    <td><img src=${json[i].image}></td>
                    <td>${json[i].rating.rate} and count  ${json[i].rating.count}</td>
                    `   
               }
                output.innerHTML = content;
            })