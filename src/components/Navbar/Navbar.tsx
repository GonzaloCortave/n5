import "./Navbar.scss";
import { PiShoppingCartBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="Navbar">
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Products
            </button>
            <button
                className="Navbar__cart"
                onClick={() => {
                    navigate("/cart");
                }}
            >
                Cart
                <PiShoppingCartBold />
            </button>
            <button
                onClick={() => {
                    navigate("/add-product");
                }}
            >
                Add product
            </button>
        </nav>
    );
};

export default Navbar;
