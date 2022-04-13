const url = "https://striveschool-api.herokuapp.com/api/product/";
window.onload.addEventListener = async(myEvent) => {
 const response = await fetch(url, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2NDk4NTQwMTIsImV4cCI6MTY1MTA2MzYxMn0.T3Nr7xgMgdKZTfA1MmtVwOrjv8-RsBJjFXETo3D5cc4"
}
})
// console.log(await response)
getProducts();
}
window.onload();


const handleSubmit = async(event) => {
    event.preventDefault();

//***************************************** POST PRODUCTS ************************************************

    const myEvent = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imgUrl").value,
        price: document.getElementById("price").value
            }
            await fetch(url,{ 
                method: "POST",
                body: JSON.stringify(myEvent),
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2NDk4NTQwMTIsImV4cCI6MTY1MTA2MzYxMn0.T3Nr7xgMgdKZTfA1MmtVwOrjv8-RsBJjFXETo3D5cc4"
                        }
            })
            .catch(error => console.log("error", error))
}

//***************************************** GET PRODUCTS ************************************************

const getProducts =  async() => { 
    const response = await fetch(url,{ 
                method: "GET",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2NDk4NTQwMTIsImV4cCI6MTY1MTA2MzYxMn0.T3Nr7xgMgdKZTfA1MmtVwOrjv8-RsBJjFXETo3D5cc4"
                        }
            })

            console.log(response)
            const products = await response.json() 
            console.log(products)
            const container = document.querySelector(".card-columns")
   
    products.forEach((prod)=> {
        container.innerHTML += 
            `<div class="card" onclick="setData(${prod})">
                <div class="card-body">
                    ${prod.name}
                </div>
            </div>`
    })
return products
}

let setData = (prod) => {
    console.log(prod)
    // document.querySelector("#name").innerHTML = prod.name
}

//***************************************** UPDATE PRODUCTS ************************************************
    const editProducts =  async() => { 
    const response = await fetch(url,{ 
                body: "",
                method: "PUT",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2NDk4NTQwMTIsImV4cCI6MTY1MTA2MzYxMn0.T3Nr7xgMgdKZTfA1MmtVwOrjv8-RsBJjFXETo3D5cc4"
                        }
            })
            
        }
//***************************************** DELETE PRODUCTS ************************************************
        const deleteProducts =  async() => { 
    const response = await fetch(url,{ 
                method: "DELETE",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2NDk4NTQwMTIsImV4cCI6MTY1MTA2MzYxMn0.T3Nr7xgMgdKZTfA1MmtVwOrjv8-RsBJjFXETo3D5cc4"
                        }
            })
           
        }
