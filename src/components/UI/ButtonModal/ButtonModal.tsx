import React from "react";
import "./styles.scss";
interface IButtonModal {
    buttonText: string;
    classButton: string;
    buttonType: boolean;
    clickButton?: () => void
}
import { motion } from "framer-motion";
function ButtonModal({ buttonText, classButton, buttonType, clickButton }: IButtonModal) {
    const animateButton = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: number) => ({
            opacity: 1,
            transition: { delay: custom , duration: 1.5 },
        }),
    };
    if (buttonType) {
        return (
            <motion.button
                custom={1}
                variants={animateButton}
                type="button"
                className={`button-modal button-modal_${classButton}`}
                onClick={clickButton}
            >
                {buttonText}
            </motion.button>
        );
    } else {
        return (
            <motion.button
                custom={1}
                variants={animateButton}
                type="button"
                className={`button-modal button-modal_learn button-modal_learn_${classButton}`}
                onClick={clickButton}
            >
                {buttonText}
            </motion.button>
        );
    }
}

export default ButtonModal;
