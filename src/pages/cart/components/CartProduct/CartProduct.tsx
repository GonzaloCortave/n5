import QuantityCounter from "@/components/QuantityCounter/QuantityCounter";
import { CartProduct } from "@/pages/home/components/Products/@types";

import "./CartProduct.scss";
import { useEffect, useState } from "react";

import { useProductsContext } from "@/appProviders/ProductsProvider";
type CartProductProps = {
    product: CartProduct;
};

const CartProduct = ({ product }: CartProductProps) => {
    const { id, name, price, amount, quantity: initialQuantity } = product;
    const { addProductToCart: updateProduct } = useProductsContext();
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        id && updateProduct({ id, quantity });
    }, [quantity]);

    return (
        <div key={id} className="CartProduct">
            <h2>
                Name: <strong>{name}</strong>
            </h2>
            <p>
                Price: <strong>{price}</strong>
            </p>
            <p>
                Stock: <strong>{amount}</strong>
            </p>
            <p className="CartProduct__amount">
                Amount:
                <strong>
                    <QuantityCounter
                        maxQuantity={amount}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </strong>
            </p>
            <p>
                Total: <strong>{price * quantity || ""}</strong>
            </p>
        </div>
    );
};

export default CartProduct;
