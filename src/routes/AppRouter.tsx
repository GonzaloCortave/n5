import { Route, Routes } from "react-router-dom";

import { AppProviders } from "@/appProviders";
import { Home } from "@/pages/home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Cart from "@/pages/cart/Cart";

export const AppRouter = () => {
    return (
        <AppProviders>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Cart />} path="/cart" />
            </Routes>
        </AppProviders>
    );
};
