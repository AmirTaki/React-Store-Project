import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { IProduct } from "../../types/server";

function Store() {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts().then((result) =>{
            // console.log(result)
            setProducts(result);
        });
    },[])

    // console.log(products)
    return(
        <div>
            <Container>
              <h1 className="text-right mt-5">جدید ترین محصولات</h1>

                <div className="grid grid-cols-4  gap-4 mt-4">
                    {
                        products.map((item) => (
                            
                            <Link key= {item.id} to = {`/product/${item.id}`}>
                                <ProductItem {...item} />
                            </Link>
                        ))
                    }                    
                </div>
            </Container>
           
        </div>
    )
}

export default  Store;