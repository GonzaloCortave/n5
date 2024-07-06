import { useEffect, useState } from "react";

import { clearCartProducts, getCartProducts, saveCartProducts } from "@/localStorage/cartProducts";
import { CartProductBasicInfo } from "@/pages/home/components/Products/@types";

export const useCartProducts = () => {
    const [rawCartProducts, setRawCartProducts] = useState<CartProductBasicInfo[]>(() => {
        return getCartProducts() || [];
    });

    useEffect(() => {
        saveCartProducts(rawCartProducts);
    }, [rawCartProducts]);

    const clearCart = () => {
        setRawCartProducts([]);
        clearCartProducts();
    };

    const upsetProduct = ({ id, quantity }: CartProductBasicInfo): CartProductBasicInfo[] => {
        const productIndex = rawCartProducts.findIndex((product) => product.id === id);

        if (productIndex !== -1) {
            const updatedProducts = rawCartProducts.map((product, index) =>
                index === productIndex ? { ...product, quantity } : product,
            );

            return updatedProducts;
        } else {
            return [...rawCartProducts, { id, quantity }];
        }
    };

    const addProductToCart = ({ id, quantity }: CartProductBasicInfo) => {
        const updatedProducts = upsetProduct({ id, quantity });

        setRawCartProducts(updatedProducts);
    };

    return { rawCartProducts, addProductToCart, clearCart };
};
