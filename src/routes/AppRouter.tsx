import { Route, Routes } from "react-router-dom";

import { AppProviders } from "@/appProviders";
import { Home } from "@/pages/home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Cart from "@/pages/cart/Cart";
import AddProudctPage from "@/pages/add-product/AddProductPage";

export const AppRouter = () => {
    return (
        <AppProviders>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Cart />} path="/cart" />
                <Route element={<AddProudctPage />} path="/add-product" />
            </Routes>
        </AppProviders>
    );
};
