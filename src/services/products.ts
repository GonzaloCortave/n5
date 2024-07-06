import { apiService } from "./api";

import { Products } from "@/pages/home/components/Products/@types";

type GetProductsResponse = {
    products: Products;
};
export const getProducts = async () => {
    const res = await apiService<GetProductsResponse>({
        hostname: "apiSimulation.json",
    });

    return res?.products || [];
};
