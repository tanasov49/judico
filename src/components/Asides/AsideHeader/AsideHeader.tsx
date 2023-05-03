import React from "react";
import "./styles.scss";
import ImageHeader from "@images/image-header.png";
function AsideHeader() {
    return (
        <aside className="aside-header">
            <img
                className="aside-header__image"
                src={ImageHeader}
                alt="image-header"
            />
            <div className="aside-header-text">
                <h1 className="aside-header-text__title">
                    Help to reclaim your life and freedom{" "}
                </h1>
                <p className="aside-header-text__subtitle">
                    We know how large objects will act, but things on a small
                    scale.
                </p>
            </div>
        </aside>
    );
}

export default AsideHeader;
