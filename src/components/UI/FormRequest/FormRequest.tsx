import React, { useContext, useState } from "react";
import FormImage from "@images/form-image.png";
import "./styles.scss";
import TitleSection from "../TitleSection/TitleSection";
import { ModalContext } from "@context";
import { selectTimes, selectsDepartaments } from "@data";
interface iFormRequest {
    classForm: string;
}
function FormRequest({ classForm }: iFormRequest) {
    const { values, errors, handleChange, canSubmit, hanldeSubmitForm } =
        useContext(ModalContext);
    return (
        <div className={`block-form block-form_${classForm}`}>
            <img
                className="block-form__image"
                src={FormImage}
                alt="form-image"
            />
            <form
                onSubmit={hanldeSubmitForm}
                className="form-request"
                noValidate
            >
                <TitleSection
                    title="Request A Free Consultation"
                    classTitle="form-request"
                />
                <div className="form-request-input">
                    <label htmlFor="name" className="form-request-input__label">
                        Name*
                    </label>
                    <input
                        className="form-request-input__input"
                        name="name"
                        placeholder="Full name"
                        type="text"
                        value={values["name"]}
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="form-request-input__error">
                        {errors["name"]}
                    </span>
                </div>
                <div className="form-request-input">
                    <label
                        htmlFor="email"
                        className="form-request-input__label"
                    >
                        Email*
                    </label>
                    <input
                        className="form-request-input__input"
                        name="email"
                        placeholder="example@gmail.com"
                        type="email"
                        onChange={(e) => handleChange(e)}
                        value={values["email"]}
                    />
                    <span className="form-request-input__error">
                        {errors["email"]}
                    </span>
                </div>
                <div className="form-request-select form-request-select_departament">
                    <p className="form-request-select__label">Department *</p>
                    <select
                        className="form-request-select-items"
                        name="departament"
                        onChange={(e) => handleChange(e)}
                        defaultValue={"Please Select"}
                    >
                        <option disabled>{"Please Select"}</option>
                        {selectsDepartaments.map((item, key: number) => (
                            <option key={key} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <span className="form-request-select__error">
                        {errors["departament"]}
                    </span>
                </div>
                <div className="form-request-select form-request-select_time">
                    <p className="form-request-select__label">Time *</p>
                    <select
                        className="form-request-select-items"
                        name="times"
                        onChange={(e) => handleChange(e)}
                        defaultValue={"Please Select"}
                    >
                        <option disabled>{"Please Select"}</option>
                        {selectTimes.map((item, key: number) => (
                            <option value={item.title} key={key}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <span className="form-request-select__error">{}</span>
                </div>
                <button
                    disabled={!canSubmit}
                    className={
                        canSubmit
                            ? "form-request__submit"
                            : "form-request__submit form-request__submit_disabled"
                    }
                    type="submit"
                >
                    Book Appointment
                </button>
            </form>
        </div>
    );
}

export default FormRequest;
