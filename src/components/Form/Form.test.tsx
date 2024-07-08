import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Form from "./Form";

vi.mock("react-hook-form", () => ({
    useFormContext: () => ({
        register: vi.fn(),
        watch: vi.fn(),
        formState: {
            errors: {},
        },
        handleSubmit: vi.fn((fn) => fn),
    }),
    useForm: vi.fn(() => ({
        handleSubmit: vi.fn((fn) => fn),
        reset: vi.fn(),
    })),
    FormProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe("<Form />", () => {
    const mockSubmit = vi.fn();

    const inputs = [
        {
            value: "name",
            label: "Name",
            required: false,
        },
        {
            value: "price",
            label: "Price",
            type: "number",
            required: false,
        },
    ];

    const defaultValues = {
        name: "Test Product",
        price: 100,
    };

    it("renders the form with inputs and defaultValues", () => {
        const { findByText } = render(
            <Form
                defaultValues={defaultValues}
                formTitle="Test Form"
                inputs={inputs}
                onSubmit={mockSubmit}
            />,
        );

        expect(findByText("Test Product")).toBe;
        expect(findByText("100")).toBe;
    });

    it("calls onSubmit prop when form is submitted", () => {
        const { getByTestId } = render(
            <Form
                defaultValues={defaultValues}
                formTitle="Test Form"
                inputs={inputs}
                onSubmit={mockSubmit}
            />,
        );

        fireEvent.submit(getByTestId("form"));
        expect(mockSubmit).toHaveBeenCalled();
    });
});
