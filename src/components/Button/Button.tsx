import cx from "classnames";
import "./Button.scss";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

const Button = ({ children, className, disabled, onClick, type = "button" }: ButtonProps) => (
    <button className={cx("Button", className)} disabled={disabled} type={type} onClick={onClick}>
        {children}
    </button>
);

export default Button;
