import { useState } from "react";
import Button from "../../components/button/button";
import Container from "../../components/container/Container";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";

function Login () {

    const {handleLogin} = useShoppingCardContext()

    
  const [user, setUser] = useState({
    username : "",
    password : "" 
  })

  const handelChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    const {name, value} = e.target ;
    
    setUser ({
        ...user, 
        [name] : value
    })
  }
    return (
        <>
            <Container>
                <div className="bg-slate-300 p-12 rounded">
                    <input onChange={handelChange} type="text" placeholder="username" name = "username" value = {user.username}/>
                    <input onChange={handelChange} type="password" placeholder="password" name = "password" value = {user.password}/>
                    <Button onClick={()=>handleLogin(user.username, user.password)}>
                        Login
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Login;