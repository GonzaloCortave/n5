import cx from "classnames";
import "./Button.scss";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({ children, className, disabled, onClick }: ButtonProps) => (
    <button className={cx("Button", className)} disabled={disabled} onClick={onClick}>
        {children}
    </button>
);

export default Button;
