import axios from "axios";

const client = axios.create({

    baseURL : "http://localhost:8003",
});



export async function getProducts() {
    const {data} = await client("/products")
    
    // console.log(data.data)

    return data;
}


// axios.get("")