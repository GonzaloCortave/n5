import Product from "../Product/Product";

import "./Products.scss";
import { useProductsContext } from "@/appProviders/ProductsProvider";

const Products = () => {
    const { products, addProductToCart } = useProductsContext();

    return (
        <>
            <h1>Products</h1>
            <div className="Products">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onAddProductClick={addProductToCart}
                    />
                ))}
            </div>
        </>
    );
};

export default Products;
