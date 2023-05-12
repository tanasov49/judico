import React, { createContext, useState, useRef, useEffect } from "react";
interface IModalContext {
    values: {};
    errors: {};
    handleChange: (
        e: React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ) => void;
    canSubmit: boolean;
    hanldeSubmitForm: (e: React.SyntheticEvent<EventTarget>) => void;
}
interface IValues {
    name: string;
    email: string;
    departament: string;
    times: string
}
interface IValid {
    validName: boolean;
    validEmail: boolean;
    validDep: boolean;
    validTime: boolean;
}
export const ModalContext = createContext<IModalContext>({
    values: Array,
    errors: Array,
    handleChange: () => {},
    canSubmit: false,
    hanldeSubmitForm: () => {},
});
export const ModalState = ({ children }: { children: React.ReactNode }) => {
    const defaulValues: IValues = {
        name: "",
        email: "",
        departament: "",
        times: ''
    };
    const defaultValid: IValid = {
        validName: false,
        validEmail: false,
        validDep: false,
        validTime: false
    };
    const [values, setValues] = useState(defaulValues);
    const [errors, setErrors] = useState(defaulValues);
    const [valid, setValid] = useState(defaultValid);
    const [canSubmit, setCanSubmit] = useState<boolean>(false);
    useState<string>("Please Select");
    const handleValidate = (name: string, value: string): void => {
        let regesName =
            /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        let regesEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isErrors = errors;
        let { validName, validEmail, validDep, validTime } = valid;
        if (name === "name") {
            if (!value) {
                isErrors.name = "Name is required";
                validName = false;
            } else {
                validName = regesName.test(value);
                isErrors.name = validName
                    ? ""
                    : "Only text name or minimum 2 length";
            }
        }
        if (name === "email") {
            if (!value) {
                validEmail = false;
                isErrors.email = "Email is required";
            } else {
                validEmail = regesEmail.test(value);
                isErrors.email = validEmail ? "" : "Email must be validate";
            }
        }
        if (name === "departament") {
            if (value === "Please Select") {
                validDep = false;
                isErrors.departament = "Select required";
            } else {
                validDep = true;
                isErrors.departament = "";
            }
        }
        if (name === "times") {
            if (value === "Please Select") {
                validTime = false;
                isErrors.departament = "Select required";
            } else {
                validTime = true;
                isErrors.departament = "";
            }
        }
        setErrors(isErrors);
        setValid({
            validName: validName,
            validEmail: validEmail,
            validDep: validDep,
            validTime: validTime
        });
        setCanSubmit(validName && validEmail && validDep && validTime);
    };
    const handleChange = (
        e: React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ): void => {
        const { name, value } = e.target;
        handleValidate(e.target.name, e.target.value);
        if (name === "email") {
            setValues({
                ...values,
                [name]: value,
            });
        }
        if (name === "name") {
            setValues({
                ...values,
                [name]: value,
            });
        }
        if (name === "departament") {
            setValues({
                ...values,
                [name]: value,
            });
        }
    };
    const hanldeSubmitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        setValues(defaulValues);
        setValid(defaultValid);
        setCanSubmit(false);
        console.log(values);
    };

    return (
        <ModalContext.Provider
            value={{
                values,
                errors,
                handleChange,
                canSubmit,
                hanldeSubmitForm,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
