import Input from "../Input/Input";
import "./Form.scss";

import { Input as InputType } from "../Input/@types";

import { DefaultValues, FieldValues, FormProvider, useForm } from "react-hook-form";

import Button from "../Button/Button";

type FormProps<FormT extends FieldValues> = {
    inputs: InputType[];
    defaultValues: DefaultValues<FormT>;
    onSubmit: (data: FormT) => void;
    formTitle: string;
};

const Form = <FormT extends FieldValues>({
    inputs,
    defaultValues,
    onSubmit,
    formTitle,
}: FormProps<FormT>) => {
    const methods = useForm<FormT>({
        defaultValues,
    });

    const { handleSubmit, reset } = methods;

    return (
        <FormProvider {...methods}>
            <form
                className="Form"
                onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                    reset(defaultValues);
                })}
            >
                <h2>{formTitle}</h2>
                {inputs.map((input, index) => (
                    <Input key={index} {...input} />
                ))}
                <Button type="submit">Submit</Button>
            </form>
        </FormProvider>
    );
};

export default Form;
