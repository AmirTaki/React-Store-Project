import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { getProduct } from "../../pages/services/api";
import { IProduct } from "../../types/server";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";


interface ICartItem {
    id  : number,
    qty : number
}

function CartItem ({id , qty}:ICartItem) {

    const [product, setProduct] = useState <IProduct>();

    const {handleDecreaseProductQty, handleIncreaseProductQty, handleRemoveProduct} = useShoppingCardContext()

    useEffect(() =>{
        getProduct(id).then((data) =>{
            setProduct(data)
        })
    },[])


    return (
    
        <div className="flex flex-row-reverse mt-4 border-b pb-2">

            <Link to = {`/product/${id}`}>
                <img src={product?.image} className=" rounded w-28" alt="" />
            </Link>
            
            <div  className = "mr-4">
                <h3 className="text-right"> {product?.title}</h3>

                <div className="mt-2">
                    <Button onClick={()=>handleRemoveProduct(id)} variant="danger" className="mr-2">remove</Button>
                    
                    <Button onClick={()=>handleIncreaseProductQty(id)} variant="primary">+</Button>
                    <span className="mx-2">{qty}</span>
                    <Button onClick={()=>handleDecreaseProductQty(id)}  variant="primary">-</Button>
                </div>
                
    
            </div>
        </div>
          
       
    )
}

export default CartItem;