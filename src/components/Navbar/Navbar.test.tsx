import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Navbar from "./Navbar";

const navigate = vi.fn();

vi.mock("react-router-dom", () => ({
    useNavigate: () => navigate,
}));

describe("<Navbar />", () => {
    it("renders the navbar with buttons", () => {
        const { getByText } = render(<Navbar />);

        expect(getByText("Products")).toBe;
        expect(getByText("Cart")).toBe;
        expect(getByText("Add product")).toBe;
    });

    it("navigates to the home page when the Products button is clicked", () => {
        const { getByText } = render(<Navbar />);

        fireEvent.click(getByText("Products"));
        expect(navigate).toHaveBeenCalledWith("/");
    });

    it("navigates to the cart page when the Cart button is clicked", () => {
        const { getByText } = render(<Navbar />);

        fireEvent.click(getByText("Cart"));
        expect(navigate).toHaveBeenCalledWith("/cart");
    });

    it("navigates to the add product page when the Add product button is clicked", () => {
        const { getByText } = render(<Navbar />);

        fireEvent.click(getByText("Add product"));
        expect(navigate).toHaveBeenCalledWith("/add-product");
    });
});
