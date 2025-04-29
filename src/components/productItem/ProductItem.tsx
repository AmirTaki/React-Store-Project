function ProductItem () {
    return (
        
        <div className="shadow border rounded pb-2">
            <img   className="rounded-t" src="https://www.img2go.com/assets/dist/sample-files/img/resize_image.png" alt="" />
            <div className="flex justify-between flex-row-reverse px-4 mt-2">
                <h3>عنوان محصول</h3>
                <span>55$</span>
            </div>

            <div className="px-4 mt-1">
                <p className="line-clamp-2 text-right">                
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam repellat aspernatur laborum. Eligendi illo expedita ullam eius possimus, non minima pariatur sequi. Voluptatum consequuntur sapiente corrupti ut. Ab, alias!
                </p>
            </div>
        </div>
    )
}

export default ProductItem;