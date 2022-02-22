import React from "react";
import "../styles/Form.css";

import { useForm } from "react-hook-form";

import errorIcon from "../images/icon-error.svg";

const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        alert(`Thanks! ${data.firstName} ${data.lastName}`);
        reset(defaultValues)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
            <div
                className="input__container"
                style={
                    errors.firstName
                        ? { marginBottom: 40 }
                        : { marginBottom: 20 }
                }
            >
                <input
                    type="text"
                    placeholder="First Name"
                    autoFocus
                    {...register("firstName", {
                        required: "First Name cannot be empty",
                    })}
                    style={
                        errors.firstName
                            ? { border: "2px solid var(--Red)" }
                            : null
                    }
                />

                <img
                    src={errorIcon}
                    alt="ErrorIcon"
                    className="error__icon"
                    style={
                        errors.firstName
                            ? { visibility: "visible", opacity: 1 }
                            : { visibility: "hidden", opacity: 0 }
                    }
                />
                {errors.firstName ? (
                    <span className="error__message">
                        {errors.firstName.message}
                    </span>
                ) : null}
            </div>

            <div
                className="input__container"
                style={
                    errors.lastName
                        ? { marginBottom: 40 }
                        : { marginBottom: 20 }
                }
            >
                <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                        required: "Last Name cannot be empty",
                    })}
                    style={
                        errors.lastName
                            ? { border: "2px solid var(--Red)" }
                            : null
                    }
                />

                <img
                    src={errorIcon}
                    alt="ErrorIcon"
                    className="error__icon"
                    style={
                        errors.lastName
                            ? { visibility: "visible", opacity: 1 }
                            : { visibility: "hidden", opacity: 0 }
                    }
                />
                {errors.lastName ? (
                    <span className="error__message">
                        {errors.lastName.message}
                    </span>
                ) : null}
            </div>

            <div
                className="input__container"
                style={
                    errors.email ? { marginBottom: 40 } : { marginBottom: 20 }
                }
            >
                <input
                    type="text"
                    placeholder="Email Address"
                    {...register("email", {
                        required: "Email Address cannot be empty",
                        pattern: {
                            value: /@[a-zA-Z]+\.[a-zA-Z]+/i,
                            message: "Looks like this is not an email",
                        },
                    })}
                    style={
                        errors.email ? { border: "2px solid var(--Red)" } : null
                    }
                />

                <img
                    src={errorIcon}
                    alt="ErrorIcon"
                    className="error__icon"
                    style={
                        errors.email
                            ? { visibility: "visible", opacity: 1 }
                            : { visibility: "hidden", opacity: 0 }
                    }
                />
                {errors.email ? (
                    <span className="error__message">
                        {errors.email.message}
                    </span>
                ) : null}
            </div>

            <div
                className="input__container"
                style={
                    errors.password
                        ? { marginBottom: 40 }
                        : { marginBottom: 20 }
                }
            >
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password cannot be empty",
                    })}
                    style={
                        errors.password
                            ? { border: "2px solid var(--Red)" }
                            : null
                    }
                />

                <img
                    src={errorIcon}
                    alt="ErrorIcon"
                    className="error__icon"
                    style={
                        errors.password
                            ? { visibility: "visible", opacity: 1 }
                            : { visibility: "hidden", opacity: 0 }
                    }
                />
                {errors.password ? (
                    <span className="error__message">
                        {errors.password.message}
                    </span>
                ) : null}
            </div>

            <input type="submit" value="CLAIM YOUR FREE TRIAL" />
            <p>
                By clicking the button, you are agreeing to our{" "}
                <span>Terms and Services</span>
            </p>
        </form>
    );
};

export default Form;
