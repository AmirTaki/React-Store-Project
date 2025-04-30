import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/button";
import { getProduct } from "../services/api";
import {  IProduct } from "../../types/server";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";

function Product () {
    
    const parmas = useParams<{ id : string }>();
    // console.log(parmas)

    const [product, setProduct] = useState<IProduct>('');

    const {handleIncreaseProductQty, cartItems} = useShoppingCardContext();

    console.log(cartItems)

    useEffect(()=>{
        getProduct(parmas.id as string ).then((result) => {
            // console.log(result);
            setProduct(result);
        })
    },[])

    return (
        <div>
            <Container>   
                <div className="h-96 shadow mt-4 grid grid-cols-12 ">
                    <div className="  p-4 col-span-10 ">  
                        
                        <h1 className="text-right">{product.title}</h1>
                        <div>
                            <p className="text-right">{product.price}$</p>
                            <p className="text-right"> {product.description}</p>
                        </div>
                    </div>

                                  
                    <div className=" p-4 col-span-2 bg-sky-200">
                        <img src={product.image} className=" rounded" alt="" />
                    
                        <Button onClick={()=>handleIncreaseProductQty(parseInt(parmas.id as string))} className="mt-2 w-full !py-3" variant = "primary">Add to Cart</Button>
                        {/* <Button onClick={()=>handleIncreaseProductQty(parmas.id)} className="mt-2 w-full !py-3" variant = "primary">Add to Cart</Button> */}
                    
                        
                    </div>

                 
                </div>

              
            </Container>
         
        </div>

        
    )
}

export default Product;

