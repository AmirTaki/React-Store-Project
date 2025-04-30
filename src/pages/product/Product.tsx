import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/button";

function Product () {
    
    const parmas = useParams();

    return (
        <div>
            <Container>   
                <div className="h-96 shadow mt-4 grid grid-cols-12 ">
                    <div className="  p-4 col-span-10 ">  
                        
                        <h1 className="text-right">عنوان محصول</h1>
                        <div>
                            <p className="text-right">قیمت : 25 دلار</p>
                            <p className="text-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, doloribus aliquid alias, maiores animi tenetur laboriosam mollitia explicabo ducimus repellat, ut impedit nam libero est harum totam sequi quidem consequuntur.</p>
                        </div>
                    </div>

                                  
                    <div className=" p-4 col-span-2 bg-sky-200">
                        <img src="https://www.img2go.com/assets/dist/sample-files/img/resize_image.png" className=" rounded" alt="" />
                    
                        <Button style={{padding : "10px"}} variant = "danger">Add to Cart</Button>
                        <Button variant = "primary">Add to Cart</Button>
                        <Button variant = "secondary">Add to Cart</Button>
                        <Button variant = "success">Add to Cart</Button>
                        <Button variant = "warning">Add to Cart</Button>

                        
                    </div>

                 
                </div>

              
            </Container>
         
        </div>

        
    )
}

export default Product;

