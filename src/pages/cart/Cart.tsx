import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem"
import Button from "../../components/button/button";
import { useShoppingCardContext } from "../../context/ShoppingCartContext";

function Cart () {
    const {cartItems} = useShoppingCardContext();

    return (
        <>
            <Container>
                <div className="">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
           
                <div className="bg-gray-200 rounded p-6">
                    <p className="text-right">2,000 : قیمت کل</p>
                    <p className="text-right">200 : قیمت تخفیف</p>
                    <p className="text-right">800 : قیمت نهایی</p>
                </div>

                

                <div>
                    <Button variant  = "success" className="mt-2" >
                        ثبت سفارش
                    </Button>
                </div>
            </Container>
        </>
    )
}
export default Cart;