import { ComponentProps } from "react"

// type TButton = {
//     children : React.ReactNode;
// }

// function Button({children,  onClick }:TButton){
//     return(
//         <button onClick={onClick}>
//             {children}
//         </button>
//     )
// }


type TButton = ComponentProps<'button'>

function Button({children,  ...rest }:TButton){
    return(
        <button {...rest}>
            {children}
        </button>
    )
}

export default Button