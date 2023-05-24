import React, {useContext} from "react";
import "./styles.scss";
import ImageHeader from "@images/image-header.png";
import ButtonModal from "@components/UI/ButtonModal/ButtonModal";
import { motion } from "framer-motion";
import { ModalContext } from "@context";
function AsideHeader() {
    const {hadnlePopup} = useContext(ModalContext)
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
            <motion.h1 initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} viewport={{ amount: 0.5 }} transition={{ duration: 1.5 }}className="aside-header__title">
                Help to reclaim your life and freedom{" "}
            </motion.h1>
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
                clickButton={hadnlePopup}
            />
        </aside>
    );
}

export default AsideHeader;
