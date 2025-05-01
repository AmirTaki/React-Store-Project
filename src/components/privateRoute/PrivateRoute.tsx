import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";

function PrivateRoute () {
    const {isLogin} = useShoppingCardContext()
    return (
        <>
        {
            isLogin ? <Outlet />: <Navigate to = "/login" />
        }
        </>
    )
}

export default PrivateRoute;