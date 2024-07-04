import Product from "../Product/Product";

import { useProducts } from "@/hooks/useProducts";
import "./Products.scss";

const Products = () => {
    const products = useProducts();

    return (
        <div className="Products">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
