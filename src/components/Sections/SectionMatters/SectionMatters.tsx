import React, { useState } from "react";
import "./styles.scss";
import TitleSection from "@components/UI/TitleSection/TitleSection";
import SubtitleSection from "@components/UI/SubtitleSection/SubtitleSection";
import { mattersClient } from "@data";
import ButtonModal from "@components/UI/ButtonModal/ButtonModal";
import { motion } from "framer-motion";
function SectionMatters() {
    return (
        <>
            <TitleSection
                title="Every Client Matters"
                classTitle="section-matters"
            />
            <SubtitleSection
                subtitle={`Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics`}
                classSubtitle="section-matters"
            />
            <ul className="matters-client">
                {mattersClient.map(({ title, SvgImage }, key) => (
                    <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: key * 0.8 }}
                        className="matters-client-item"
                        key={key}
                    >
                        <div className="matters-client-item__logo">
                            <SvgImage />
                        </div>
                        <h4 className="matters-client-item__title">{title}</h4>
                    </motion.li>
                ))}
            </ul>
            <div className="section-matters__buttons">
                <ButtonModal
                    classButton="section-matters__buttons"
                    buttonText="Get Quote Now"
                    buttonType={true}
                />
                <ButtonModal
                    classButton="section-matters__buttons"
                    buttonText="Learn More"
                    buttonType={false}
                />
            </div>
        </>
    );
}

export default SectionMatters;
