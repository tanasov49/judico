import React from "react";
import "./styles.scss";
import ImageHeader from "@images/image-header.png";
import ButtonModal from "@components/UI/ButtonModal/ButtonModal";
function AsideHeader() {
    return (
        <aside className="aside-header">
            <img
                className="aside-header__image"
                src={ImageHeader}
                alt="image-header"
            />
            <h1 className="aside-header__title">
                Help to reclaim your life and freedom{" "}
            </h1>
            <p className="aside-header__subtitle">
                We know how large objects will act, but things on a small scale.
            </p>
            <ButtonModal buttonType={true} buttonText="Get Quote Now" classButton="aside-header" />
            <ButtonModal buttonType={false} buttonText="Learn More" classButton="aside-header" />
        </aside>
    );
}

export default AsideHeader;
