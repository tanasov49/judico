import AsideHeader from "@components/Asides/AsideHeader/AsideHeader";
import Section from "@components/Sections/Section";
import SectionAbout from "@components/Sections/SectionAbout/SectionAbout";
import SectionAttorneys from "@components/Sections/SectionAttorneys/SectionAttorneys";
import SectionMatters from "@components/Sections/SectionMatters/SectionMatters";
import SectionRequest from "@components/Sections/SectionRequest/SectionRequest";
import SectionReviews from "@components/Sections/SectionReviews/SectionReviews";
import React from "react";

function HomePage() {
    return (
        <div className="home-page">
            <AsideHeader />
            <Section sectionClass="section-matters">
                <SectionMatters />
            </Section>
            <Section sectionClass="section-about">
                <SectionAbout />
            </Section>
            <Section sectionClass="section-reviews">
                <SectionReviews />
            </Section>
            <Section sectionClass="section-attorneys">
                <SectionAttorneys />
            </Section>
            <Section sectionClass="section-request">
                <SectionRequest />
            </Section>
        </div>
    );
}

export default HomePage;
