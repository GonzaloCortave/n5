import { useState, useEffect } from "react";

import { Products } from "@/pages/home/components/Products/@types";
import { getProducts } from "@/services/products";

export const useProducts = () => {
    const [products, setProducts] = useState<Products>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsRes = await getProducts();

            setProducts(productsRes);
        };

        fetchProducts();
    }, []);

    return { products, setProducts };
};
