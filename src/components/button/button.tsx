import { ComponentProps } from "react"

// variant : union type
type TVariant ="primary" | "secondary" | "danger" | "warning" | "success"

type TButton = ComponentProps<'button'>  &  {
    variant : TVariant
    }

function Button({children, variant, style ,...rest }:TButton){
    
    // console.log(checkVariant(variant))
    return(
    <button {...rest}  style={ {...style, ...checkVariant(variant)} }> 
        {children}
    </button>
    )
}

export default Button



function checkVariant(variant:TVariant) {
    if (variant === "primary"){
        return {backgroundColor : "blue", color : "white"}
    }
    else if (variant === "secondary"){
        return {backgroundColor : "gray", color : "black"}
    }
    else if (variant === "danger"){
        return {backgroundColor : "red", color : "white"}
    }
    else if (variant === "warning"){
        return {backgroundColor : "yellow", color : "white"}
    }
    else if (variant === "success"){
        return {backgroundColor : "green", color : "white"}
    }
}

// دلیل اصلی که 
// style 
// میگذاریم این است که وفتی در المنت تعریف کردیم اعمال شود


// نکته میشود به جای 
// style 
// از
// class name  
// استفاده شود


// function Button({children, variant, className ,...rest }:TButton){
    
//     // console.log(checkVariant(variant))
//     return(
//     <button {...rest}  className = { ...className, primary  }> 
//         {children}
//     </button>
//     )


// 