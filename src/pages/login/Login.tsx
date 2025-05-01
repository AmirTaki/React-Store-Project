import Button from "../../components/button/button";
import Container from "../../components/container/Container";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";

function Login () {

    const {handleLogin} = useShoppingCardContext()
    return (
        <>
            <Container>
                <div className="bg-slate-300 p-12 rounded">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <Button onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Login;