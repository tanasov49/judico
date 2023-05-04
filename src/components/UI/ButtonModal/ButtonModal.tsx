import React from "react";
import "./styles.scss";
interface IButtonModal {
    buttonText: string;
    classButton: string;
    buttonType: boolean;
}
function ButtonModal({ buttonText, classButton, buttonType }: IButtonModal) {
    if (buttonType) {
        return (
            <button
                type="button"
                className={`button-modal button-modal_${classButton}`}
            >
                {buttonText}
            </button>
        );
    } else {
        return (
            <button
                type="button"
                className={`button-modal button-modal_learn button-modal_learn_${classButton}`}
            >
                {buttonText}
            </button>
        );
    }
}

export default ButtonModal;
