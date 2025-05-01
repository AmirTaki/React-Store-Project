import { useEffect, useState } from "react"


export function useLocalStorage <T> (key:string , initiallValue:T)  {
    const [value, setValue] = useState<T>(()=>{
        let localCart = localStorage.getItem("cartItmes")


        // return localCart != null ? JSON.parse(localCart) : initiallValue;
        
        if (localCart != null){
            return JSON.parse(localCart)
        }
        else {
            return initiallValue;
        }
    })  ;

    useEffect (()=>{
        localStorage.setItem(key,JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]

}