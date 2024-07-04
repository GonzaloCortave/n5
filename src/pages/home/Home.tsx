import { Helmet } from "react-helmet";

import "./Home.scss";
// import Logo from "@/../public/images/logo.png";
import Products from "./components/Products/Products";

export const Home = () => {
    return (
        <main className="Home">
            <Helmet>
                <title>N5 - Cortave Gonzalo</title>
            </Helmet>
            {/* <nav>
        <img src={Logo} alt="logo" />
      </nav> */}
            <Products />
        </main>
    );
};

//TODO: delete this code
// const { showModal } = useModalManager();

{
    /* <button
        className={cx(
          "text-mdw-auto mt-3 inline-block rounded-lg border bg-blue-500 px-2 py-2",
          styles.button,
        )}
        onClick={() => showModal(modalIds.SignInRedirect)}
      >
        Mostrar modal
      </button> */
}
