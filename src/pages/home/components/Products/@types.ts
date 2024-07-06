export type Product = {
    name: string;
    price: number;
    amount: number;
    id: number;
};

export type CartProduct = Product & {
    quantity: number;
};

export type CartProductBasicInfo = {
    id: number;
    quantity: number;
};

export type CartProducts = CartProduct[];

export type Products = Product[];
