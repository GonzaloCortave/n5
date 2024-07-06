import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import "./QuantityCounter.scss";

type QuantityCounterProps = {
    quantity: number;
    maxQuantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantityCounter = ({ quantity, maxQuantity, setQuantity }: QuantityCounterProps) => {
    const handleIncrement = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity >= maxQuantity) return prevQuantity;

            return prevQuantity + 1;
        });
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity === 1) return prevQuantity;

            return prevQuantity - 1;
        });
    };

    return (
        <div className="QuantityCounter">
            <button onClick={handleDecrement}>
                <CiSquareMinus />
            </button>
            {quantity}
            <button onClick={handleIncrement}>
                <CiSquarePlus />
            </button>
        </div>
    );
};

export default QuantityCounter;
