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
    cartItems : IcardItem[];
    handleIncreaseProductQty : (id : number) => void
}

export const ShoppingCardContext = createContext({} as IShoppingCardContext)


export const useShoppingCardContext = () =>{
    return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({children}:IShoppingCardProvider){

    const [cartItems, setCartItems ] = useState <IcardItem[]> ([])

    const handleIncreaseProductQty = (id : number) =>{
        setCartItems((currentItems) =>{
            let selectedItem = currentItems.find(item => item.id == id)
            if (selectedItem == null) {
                return [...currentItems, {id : id, qty : 1}] 
            }
            else {
                return currentItems.map(item => {
                    return item.id == id ?{...item,qty : item.qty + 1} : item
                    // if (item.id == id ){
                    //     return{...item,qty : item.qty + 1}
                    // }
                    // else {
                    //     return item;
                    // }
                  
                })
            }
            
        })
    }



    return (
        <ShoppingCardContext.Provider value={{cartItems, handleIncreaseProductQty}}>
            {children}
        </ShoppingCardContext.Provider>
    )
}