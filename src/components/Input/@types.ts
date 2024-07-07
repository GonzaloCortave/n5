export type Input = {
    value: string;
    label: string;
    type?: string;
    required?: boolean;
    validate?: (value: string | number) => string | boolean;
};
