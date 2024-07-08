import { render } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, it, expect, vi } from "vitest";

import Input from "./Input";

vi.mock("react-hook-form", () => ({
    FormProvider: ({ children }: { children: React.ReactNode }) => children,
    useForm: vi.fn(() => ({
        register: vi.fn(),
        watch: vi.fn(),
        formState: {
            errors: {},
        },
    })),
    useFormContext: () => ({
        register: vi.fn(),
        watch: vi.fn(),
        formState: {
            errors: {},
        },
    }),
}));

describe("<Input />", () => {
    it("renders the input with label", () => {
        const methods = useForm();
        const { getByLabelText, getByRole } = render(
            <FormProvider {...methods}>
                <Input required label="Name" value="name" />
            </FormProvider>,
        );

        expect(getByRole("textbox")).toBe;
        expect(getByLabelText("Name")).toBe;
    });
});
