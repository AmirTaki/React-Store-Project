import { createContext, useState } from "react";

interface IShoppingCardProvider {
    children : React.ReactNode;
}

interface IShoppingCardContext {
    cartItems : []
}

export const ShoppingCardContext = createContext<IShoppingCardContext> ({ cartItems : []})



export function ShoppingCardProvider({children}:IShoppingCardProvider){

    const [cartItems, setCartItems ] = useState<[]> ([])

    return (
        <ShoppingCardContext.Provider value={{cartItems}}>
            {children}
        </ShoppingCardContext.Provider>
    )
}