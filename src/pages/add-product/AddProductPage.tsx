import { Product } from "../home/components/Products/@types";

import Form from "@/components/Form/Form";
import { useProductsContext } from "@/appProviders/ProductsProvider";

import "./AddProductPage.scss";
import { inputs } from "./utils";

const AddProudctPage = () => {
    const { products, addProduct } = useProductsContext();

    const defaultValues: Omit<Product, "id"> = {
        name: "",
        price: 0,
        amount: 0,
    };

    const handleSubmit = (product: Product) => {
        const nextId = products.length + 1;

        addProduct({ ...product, id: nextId });
        alert("Product added!");
    };

    return (
        <div className="AddProductPage">
            <Form<Product>
                defaultValues={defaultValues}
                formTitle="Add Product"
                inputs={inputs}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddProudctPage;
