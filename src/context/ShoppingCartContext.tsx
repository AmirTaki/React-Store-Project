import { createContext, useContext, useState } from "react";

interface IShoppingCardProvider {
    children : React.ReactNode;
}

// cart = [
//     {id : 1 , qty : 5},
//     {id : 4 , qty : 8}
// ]

interface IcardItem {
    id : number,
    qty : number
}

interface IShoppingCardContext {
    cartItems : IcardItem[]
}

export const ShoppingCardContext = createContext({} as IShoppingCardContext)


export const useShoppingCardContext = () =>{
    return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({children}:IShoppingCardProvider){

    const [cartItems, setCartItems ] = useState <IcardItem[]> ([])

    return (
        <ShoppingCardContext.Provider value={{cartItems}}>
            {children}
        </ShoppingCardContext.Provider>
    )
}