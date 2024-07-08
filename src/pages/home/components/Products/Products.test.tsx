import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Products from "./Products";

const addToCartMock = vi.fn();

vi.mock("../../../../appProviders/ProductsProvider", () => ({
    useProductsContext: () => ({
        products: [
            { id: 1, name: "Product 1", price: 100, amount: 10 },
            { id: 2, name: "Product 2", price: 200, amount: 10 },
        ],
        addProductToCart: addToCartMock,
    }),
}));

describe("<Products />", () => {
    it("renders the products", () => {
        const { getByText } = render(<Products />);

        expect(getByText("Product 1")).toBe;
        expect(getByText("Product 2")).toBe;
    });

    it("calls addProductToCart when Add to Cart button is clicked", () => {
        const { getAllByText } = render(<Products />);

        fireEvent.click(getAllByText("Add to cart")[0]);
        expect(addToCartMock).toHaveBeenCalledTimes(1);
    });
});
