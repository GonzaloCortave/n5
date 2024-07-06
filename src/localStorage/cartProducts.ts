import { CartProductBasicInfo } from "@/pages/home/components/Products/@types";

function saveCartProducts(cartProducts: CartProductBasicInfo[]): void {
    try {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    } catch (error) {
        console.error("Error saving cart products:", error);
    }
}

function getCartProducts(): CartProductBasicInfo[] {
    try {
        const cartProducts = localStorage.getItem("cartProducts");

        return cartProducts ? JSON.parse(cartProducts) : [];
    } catch (error) {
        console.error("Error getting cart products:", error);

        return [];
    }
}

function upsetCartProduct(newProduct: CartProductBasicInfo): void {
    const cartProducts = getCartProducts();
    const existingProduct = cartProducts.find((product) => product.id === newProduct.id);

    if (existingProduct) {
        existingProduct.quantity = newProduct.quantity;
    } else {
        cartProducts.push(newProduct);
    }

    saveCartProducts(cartProducts);
}

function deleteCartProduct(productId: number): void {
    const cartProducts = getCartProducts();
    const updatedCartProducts = cartProducts.filter((product) => product.id !== productId);

    saveCartProducts(updatedCartProducts);
}

function clearCartProducts(): void {
    try {
        localStorage.removeItem("cartProducts");
    } catch (error) {
        console.error("Error clearing cart products:", error);
    }
}

export {
    saveCartProducts,
    getCartProducts,
    upsetCartProduct,
    deleteCartProduct,
    clearCartProducts,
};
