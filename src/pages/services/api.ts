import axios from "axios";

const client = axios.create({

    baseURL : "http://localhost:8003",
});



export async function getProducts() {
    const {data} = await client("/products")
    
    // console.log(data.data)

    return data;
}


export async function getProduct(id : string | number) {

    const {data} = await client(`/products/${id}`);

    return data;
}
