import React from "react";
import "./styles.scss";
import ImageHeader from "@images/image-header.png";
import ButtonModal from "@components/UI/ButtonModal/ButtonModal";
import { motion } from "framer-motion";
function AsideHeader() {
    return (
        <aside className="aside-header">
            <motion.img
                className="aside-header__image"
                src={ImageHeader}
                alt="image-header"
                initial={{height: 0}}
                animate={{height: '100%'}}
                transition={{duration: 2}}
            />
            <h1 className="aside-header__title">
                Help to reclaim your life and freedom{" "}
            </h1>
            <p className="aside-header__subtitle">
                We know how large objects will act, but things on a small scale.
            </p>
            <ButtonModal
                buttonType={true}
                buttonText="Get Quote Now"
                classButton="aside-header"
            />
            <ButtonModal
                buttonType={false}
                buttonText="Learn More"
                classButton="aside-header"
            />
        </aside>
    );
}

export default AsideHeader;
