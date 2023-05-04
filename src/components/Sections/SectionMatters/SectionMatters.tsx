import React, {useState} from "react";
import "./styles.scss";
import TitleSection from "@components/UI/TitleSection/TitleSection";
import SubtitleSection from "@components/UI/SubtitleSection/SubtitleSection";
import { mattersClient } from "@data";
import ButtonModal from "@components/UI/ButtonModal/ButtonModal";

function SectionMatters() {
    
    return (
        <section className="section-matters">
            <TitleSection
                title="Every Client Matters"
                classTitle="section-matters"
            />
            <SubtitleSection
                subtitle={`Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics`}
                classSubtitle='section-matters'
            />
            <ul className="matters-client">
                {mattersClient.map(({title, SvgImage}, key) =>
                <li className="matters-client-item" key={key}>
                    <div className="matters-client-item__logo">
                        <SvgImage />
                    </div>
                    <h4 className="matters-client-item__title">{title}</h4>
                </li>
                )}
            </ul>
            <div className="section-matters__buttons">
                <ButtonModal classButton="section-matters__buttons" buttonText='Get Quote Now' buttonType={true} />
                <ButtonModal classButton="section-matters__buttons" buttonText='Learn More' buttonType={false} />
            </div>
        </section>
    );
}

export default SectionMatters;
