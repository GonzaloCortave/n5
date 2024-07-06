import { useProductsContext } from "@/appProviders/ProductsProvider";

import cx from "classnames";

import "./Cart.scss";
import CartProduct from "./components/CartProduct/CartProduct";

import { formatCurrency } from "@/utils/currency";
import Button from "@/components/Button/Button";
const Cart = () => {
    const { cartProducts, totalCartPrice, buyProducts, clearCart } = useProductsContext();
    const handleBuyClick = () => {
        if (totalCartPrice() > 0) {
            if (confirm("Are you sure you want to buy the products?")) {
                buyProducts();
            }
        } else {
            alert("No products to buy");
        }
    };

    const handleClearCart = () => {
        if (totalCartPrice() > 0) {
            if (confirm("Are you sure you want to clear the cart?")) {
                clearCart();
            }
        } else {
            alert("No products to clear");
        }
    };

    const hasProducts = cartProducts().length > 0;

    return (
        <div className="Cart">
            <h1>Items in your Cart</h1>
            <div
                className={cx("Cart__products", {
                    "Cart__products--full": hasProducts,
                })}
            >
                {cartProducts().length > 0 ? (
                    cartProducts().map((product) => (
                        <CartProduct key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products in the cart</p>
                )}
            </div>
            <p>Total to pay: {formatCurrency(totalCartPrice())}</p>
            <div className="Cart__buttons-container">
                <Button onClick={handleBuyClick}>Pay</Button>
                <Button onClick={handleClearCart}>Clear Cart</Button>
            </div>
        </div>
    );
};

export default Cart;
