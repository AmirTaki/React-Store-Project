import Button from "../../components/button/button";


function Cart () {
    return (
    
        <div className="flex flex-row-reverse mt-4 border-b pb-2">
            <img src="https://www.img2go.com/assets/dist/sample-files/img/resize_image.png" className=" rounded w-28" alt="" />
        
            <div  className = "mr-4">
                <h3 className="text-right"> عنوان محصول</h3>

                <div className="mt-2">
                    <Button variant="danger" className="mr-2">remove</Button>
                    
                    <Button variant="primary">+</Button>
                    <span className="mx-2">{2}</span>
                    <Button variant="primary">-</Button>
                </div>
                
    
            </div>
        </div>
          
       
    )
}

export default Cart;