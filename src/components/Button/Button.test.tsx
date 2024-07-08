import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Button from "./Button";

describe("<Button />", () => {
    it("renders the button with children", () => {
        const { getByText } = render(<Button>Test Button</Button>);

        expect(getByText("Test Button")).toBe;
    });

    it("adds the className to the button", () => {
        const { container } = render(<Button className="test-class">Test Button</Button>);

        //   expect(container.firstChild).toHaveClass("test-class");
        expect(container.firstChild).toHaveProperty("className", "Button test-class");
    });

    it("disables the button when disabled is true", () => {
        const { getByText } = render(<Button disabled>Test Button</Button>);

        expect(getByText("Test Button")).toHaveProperty("disabled", true);
    });

    it("calls onClick prop when clicked", () => {
        const handleClick = vi.fn();
        const { getByText } = render(<Button onClick={handleClick}>Test Button</Button>);

        fireEvent.click(getByText("Test Button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("renders the button with type", () => {
        const { getByText } = render(<Button type="submit">Test Button</Button>);

        expect(getByText("Test Button")).toHaveProperty("type", "submit");
    });
});
