export const inputs = [
    {
        value: "name",
        label: "Name",
        required: true,
        validate: (value: string | number) => {
            if (value === "") {
                return "Name is required";
            }

            return true;
        },
    },
    {
        value: "price",
        label: "Price",
        type: "number",
        required: true,
        validate: (value: string | number) => {
            const valueString = String(value);

            if (valueString.startsWith("0")) {
                return "Is not a valid amount";
            }
            if (Number(value) <= 0) {
                return "Price must be greater than 0";
            }

            return true;
        },
    },
    {
        value: "amount",
        label: "Amount",
        type: "number",
        required: true,
        validate: (value: string | number) => {
            const valueString = String(value);

            if (valueString.startsWith("0")) {
                return "Is not a valid amount";
            }
            if (Number(value) <= 0) {
                return "Amount must be greater than 0";
            }

            return true;
        },
    },
];
