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
    totalCartPrice: () => number;
    buyProducts: () => void;
    clearCart: () => void;
};

const ProductsContext = createContext({} as ProductsContextProps);

export const useProductsContext = () => useContext(ProductsContext);

type ProductsProviderProps = {
    children: React.ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const { products, setProducts } = useProducts();
    const { rawCartProducts, addProductToCart, clearCart } = useCartProducts();

    const buyProducts = () => {
        alert("Products bought!");
        const updatedProducts = products.map((product) => {
            const cartProduct = rawCartProducts.find((cartItem) => cartItem.id === product.id);

            if (cartProduct) {
                return { ...product, amount: product.amount - cartProduct.quantity };
            }

            return product;
        });

        setProducts(updatedProducts);
        clearCart();
    };

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

    const totalCartPrice = useMemo(
        () => () =>
            rawCartProducts.reduce(
                (total, { id, quantity }) =>
                    total + (products.find((product) => product.id === id)?.price || 0) * quantity,
                0,
            ),
        [rawCartProducts, products],
    );

    return (
        <ProductsContext.Provider
            value={{
                products,
                cartProducts,
                addProductToCart,
                totalCartPrice,
                buyProducts,
                clearCart,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
