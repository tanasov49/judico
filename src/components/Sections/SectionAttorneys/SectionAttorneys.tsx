import React from "react";
import "./styles.scss";
import TitleSection from "@components/UI/TitleSection/TitleSection";
import SubtitleSection from "@components/UI/SubtitleSection/SubtitleSection";
import { attorneys } from "@data";
import { motion } from "framer-motion";
function SectionAttorneys() {
    return (
        <>
            <TitleSection
                title="Meet Our Attorneys"
                classTitle="section-attorneys"
            />
            <SubtitleSection
                subtitle={`Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics `}
                classSubtitle="section-attorneys"
            />
            <ul className="attorneys">
                {attorneys.map((item, key: number) => (
                    <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: key * 0.7 }}
                        key={key}
                        className="attorneys-item"
                    >
                        <img
                            className="attorneys-item__image"
                            src={item.photo}
                            alt={`photo ${item.name}`}
                        />
                        <h6 className="attorneys-item__position">
                            {item.position}
                        </h6>
                        <h5 className="attorneys-item__name">{item.name}</h5>
                        <p className="attorneys-item__subtitle">
                            {item.subtitle}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </>
    );
}

export default SectionAttorneys;
