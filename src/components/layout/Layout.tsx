import React from "react";
import Navbar from "../navbar/Navar";

interface ILayout {
    children : React.ReactNode
}

function Layout({children} :ILayout) {
    return(
        <>
           <Navbar />
            {children}
        </>
    )
}

export default  Layout;