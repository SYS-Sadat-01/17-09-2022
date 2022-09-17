
fetch("products.json")
.then(function(Response){
  return Response.json();
})

.then(function(products){

    // console.log(products)
//   var plc = document.querySelector('#data')
//   var out = '';

//   for(let pro of json){
//     out +=`
//     <tr>
//     <td>${pro.id}</td>
//     <td>${pro.name}</td>
//     <td>${pro.lname}</td>
//     <td>${pro.Dep}</td>
//     <td>${pro.id_no}</td>
//     <td>${pro.phone}</td>
//     <td>${pro.email}</td>
//     <td> <img src=" ${pro.photo}" style="height: 100px; width: auto;" alt="" srcset=""></td>

    
//     </tr>
    
//     `
//   }

//   plc.innerHTML = out;
})
