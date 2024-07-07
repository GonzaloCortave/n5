import { useFormContext } from "react-hook-form";

import { Input as InputType } from "./@types";
import "./Input.scss";

const Input = ({ value, label, type = "text", required, validate }: InputType) => {
    const { register, watch, formState } = useFormContext();
    const { errors } = formState;

    return (
        <div className="Input">
            <label className="Input__label" htmlFor={label}>
                {label}
            </label>
            <input
                className="Input__input"
                id={label}
                type={type}
                value={watch(value)}
                {...register(value, {
                    required: required ? `The ${label} field is required` : false,
                    validate,
                })}
            />
            <p className="Input__error">{errors[value] && (errors[value]?.message as string)}</p>
        </div>
    );
};

export default Input;
