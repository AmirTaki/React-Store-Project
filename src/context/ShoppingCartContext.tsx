import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../pages/services/api";
import { useNavigate } from "react-router-dom";


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
    getProductQty : (id : number) => number;
    handleRemoveProduct : (id : number) => void;
    CartQty : number;
    isLogin : boolean;
    handleLogin :(username:string , password :string)=>void;
    handleLogOut :()=>void;
}

export const ShoppingCardContext = createContext({} as IShoppingCardContext)


export const useShoppingCardContext = () =>{
    return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({children}:IShoppingCardProvider){

    // const [cartItems, setCartItems ] = useState <IcardItem[]> ([])
    
     const [cartItems, setCartItems ] = useLocalStorage<IcardItem[]> ("cartItems",[])

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

    // delete cart 
    const handleRemoveProduct = (id : number) => {
       return setCartItems(curreentitems => curreentitems.filter((item) => item.id !== id))
    }
    //
    const CartQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty , 0)
    
    const [isLogin, setIslogin] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (username : string , password : string) =>{

        login(username, password).finally(()=>{
            let token = "result.token"
            localStorage.setItem("token", token)
            
            setIslogin(true)
            navigate("/")
        })

        
       
    }
    const handleLogOut = () =>{
        setIslogin(false)
        navigate("/login")
        localStorage.removeItem("token")
    }

    useEffect (() =>{
        let toekn = localStorage.getItem("token")
        if (toekn){
            setIslogin(true)
        }
    })

    return (
        <ShoppingCardContext.Provider 
        value={{
            cartItems,
            handleIncreaseProductQty, 
            handleDecreaseProductQty, 
            getProductQty, 
            handleRemoveProduct, 
            CartQty ,
            isLogin,
            handleLogin,
            handleLogOut,
            }}
        >
            {children}
        </ShoppingCardContext.Provider>
    )
}