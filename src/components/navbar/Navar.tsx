import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";
function Navbar() {
    
    const {CartQty} = useShoppingCardContext();
    
    return(
        <div className="h-14 border-b shadow flex items-center ">
            <Container >
                <div className="flex justify-between flex-row-reverse  ">
                    <ul className="flex flex-row-reverse">
                        <li className="ml-4">
                            <Link to = {"/"}>خانه</Link> 
                        </li>
                        <li className="ml-4">
                            <Link to = {"/store"}>فروشگاه</Link> 
                        </li>
                    </ul>

                    <div className="relative">
                        
                        <Link   to = {"/cart"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        </Link>

                        <span className="absolute w-6 h-6 bg-red-600 flex justify-center items-center rounded-full text-white -top-3 -right-4 text-xs">{CartQty === 0 ? "" : CartQty } </span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default  Navbar;