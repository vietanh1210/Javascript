let products = ["sony Xperia", "Samsung Galaxy", "Nokia 6", "Iphone 11 Pro Max"]

function render(){
    let data = "<table>"
    data += "<tr><td><b>Product Name</b></td><td></td>"+ products.length +" products <td></td></tr>"
    for(let i=0; i < products.length; i++){
        data += "<tr>"
        data +=  "<td>"+ products[i] +"</td>"
        data += "<td> <button onclick = 'editproduct("+i+")' >Edit</button></td>"
        data += "<td> <button onclick = 'deleteproduct("+i+")' >Delete</button></td>"
        data +="</tr>"
    }
    data += "</tr>"
    document.getElementById("data").innerHTML = data
}