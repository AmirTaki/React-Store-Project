import { createContext, useContext, useState } from "react";

interface IShoppingCardProvider {
    children : React.ReactNode;
}

interface IcardItem {
    id : number,
    qty : number
}

interface IShoppingCardContext {
    cartItems : IcardItem[];
    handleIncreaseProductQty : (id : number) => void;
    handleDecreaseProductQty : (id : number) => void;
    getProductQty : (id : number) => number
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
            //  محصول وجود ندارد   
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
    };


    const handleDecreaseProductQty = (id : number) => {
        setCartItems((currentItems ) =>{
            let selectedItem = currentItems.find(item => item.id == id)
            // محصول وجود دارد
            
            if (selectedItem?.qty === 1) {
                return currentItems.filter(item => item.id !== id) 
            }

            else {
                return currentItems.map((item) =>{
                    return item.id == id ?{...item,qty : item.qty - 1} : item
                })
            }
        })
    };

    const getProductQty = (id : number) => {
        return cartItems.find(item => item .id == id)?.qty || 0 ;
      
    }

    


    return (
        <ShoppingCardContext.Provider value={{cartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty}}>
            {children}
        </ShoppingCardContext.Provider>
    )
}