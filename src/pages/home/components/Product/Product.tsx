import { formatCurrency } from "@/utils/currency";

import { Product as ProductType } from "../Products/@types";

import "./Product.scss";
import { PiPlantFill } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product }: { product: ProductType }) => (
    <div className="Product">
        <PiPlantFill className="Product__img" />
        <div className="Product__details">
            <h2>{product.name}</h2>
            <p>On stock: {product.amount}</p>
            <p>
                Price per unit: <strong>{formatCurrency(product.price)}</strong>
            </p>
            <button className="Product__button">
                Add to cart
                <FaCartPlus />
            </button>
        </div>
    </div>
);

export default Product;
