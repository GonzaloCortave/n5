import { useProductsContext } from "@/appProviders/ProductsProvider";

import "./Cart.scss";
import CartProduct from "./components/CartProduct/CartProduct";
const Cart = () => {
    const { cartProducts } = useProductsContext();

    return (
        <div className="Cart">
            <h1>Items in your Cart</h1>
            <div className="Cart__products">
                {cartProducts().map((product) => (
                    <CartProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
