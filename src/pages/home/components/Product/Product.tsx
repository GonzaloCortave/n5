import { formatCurrency } from "@/utils/currency";

import { CartProductBasicInfo, Product as ProductType } from "../Products/@types";

import "./Product.scss";
import { PiPlantFill } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

import QuantityCounter from "@/components/QuantityCounter/QuantityCounter";

type ProductProps = {
    product: ProductType;
    onAddProductClick: (props: CartProductBasicInfo) => void;
};

const Product = ({ product, onAddProductClick }: ProductProps) => {
    const { amount } = product;
    const [quantity, setQuantity] = useState(1);
    const hasStock = amount > 0;

    return (
        <div className="Product">
            <PiPlantFill className="Product__img" />
            <div className="Product__details">
                <h2>{product.name}</h2>
                <p>{hasStock ? `On stock ${amount}` : "No stock"}</p>
                <p>
                    Price per unit: <strong>{formatCurrency(product.price)}</strong>
                </p>
                <div className="Product__amount">
                    Amount to add:
                    {hasStock && (
                        <QuantityCounter
                            maxQuantity={amount}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    )}
                </div>
                <button
                    className="Product__button"
                    disabled={!hasStock}
                    onClick={() => onAddProductClick({ id: product.id, quantity })}
                >
                    Add to cart
                    <FaCartPlus />
                </button>
            </div>
        </div>
    );
};

export default Product;
