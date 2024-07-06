import { Helmet } from "react-helmet";

import "./Home.scss";
import Products from "./components/Products/Products";

export const Home = () => {
    return (
        <main className="Home">
            <Helmet>
                <title>N5 - Cortave Gonzalo</title>
            </Helmet>
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
