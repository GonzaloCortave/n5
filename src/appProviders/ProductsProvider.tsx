import { createContext, useContext, useMemo } from "react";

import { useCartProducts } from "@/hooks/useCartProducts";
import { useProducts } from "@/hooks/useProducts";
import {
    CartProductBasicInfo,
    CartProducts,
    Product,
    Products,
} from "@/pages/home/components/Products/@types";

type ProductsContextProps = {
    products: Products;
    cartProducts: () => CartProducts;
    addProductToCart: (props: CartProductBasicInfo) => void;
};

const ProductsContext = createContext({} as ProductsContextProps);

export const useProductsContext = () => useContext(ProductsContext);

type ProductsProviderProps = {
    children: React.ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const products = useProducts();
    const { rawCartProducts, addProductToCart } = useCartProducts();

    const cartProducts = useMemo(
        () => () =>
            rawCartProducts.map((cartProduct) => {
                const product = products.find(
                    (product) => product.id === cartProduct.id,
                ) as Product;

                return {
                    ...product,
                    quantity: cartProduct.quantity,
                };
            }),
        [rawCartProducts, products],
    );

    return (
        <ProductsContext.Provider value={{ products, cartProducts, addProductToCart }}>
            {children}
        </ProductsContext.Provider>
    );
};
