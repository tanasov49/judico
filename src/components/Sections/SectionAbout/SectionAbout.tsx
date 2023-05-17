import React, { useState } from "react";
import "./styles.scss";
import TitleSection from "@components/UI/TitleSection/TitleSection";
import SubtitleSection from "@components/UI/SubtitleSection/SubtitleSection";
import ImageVideo from "@images/video-bcg.png";
import VectorSvg from "@images/svg/vector.svg";
import { skillsAbout } from "@data";

function SectionAbout() {
    const [videoFrame, showVideoFrame] = useState<boolean>(false);
    const setShowVideo = (): void => {
        showVideoFrame(true);
    };
    return (
        <>
            <TitleSection title="Who We Are" classTitle="section-about" />
            <SubtitleSection
                subtitle={`Problems trying to resolve the conflict between the two major realms \n of Classical physics: Newtonian mechanics`}
                classSubtitle="section-about"
            />
            <div className="section-about-block">
                <div className="video-block">
                    <img
                        className="video-block__image"
                        src={ImageVideo}
                        alt="image-video"
                    />
                    <button
                        title="none"
                        onClick={setShowVideo}
                        type="button"
                        className="video-block__button"
                    >
                        <VectorSvg />
                    </button>
                    <iframe
                        src="https://www.youtube.com/embed/4NRXx6U8ABQ?controls=0"
                        className={
                            videoFrame
                                ? "video-block__iframe video-block__iframe_show"
                                : "video-block__iframe"
                        }
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="section-about-text">
                    <TitleSection
                        title={`Most trusted in \n our field`}
                        classTitle="section-about-text"
                    />
                    <SubtitleSection
                        subtitle={`Most calendars are designed for teams. Slate \n is designed for freelancers who want a \n simple way to plan their schedule.`}
                        classSubtitle="section-about-text"
                    />
                    <ul className="skills-about">
                        {skillsAbout.map(({title, subtitle, SvgImage}, key) =>
                        <li key={key} className="skills-about-item">
                            <SvgImage />
                            <h4 className="skills-about-item__title">{title}</h4>
                            <p className="skills-about-item__subtitle">{subtitle}</p>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SectionAbout;
