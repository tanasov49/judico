import AsideHeader from '@components/Asides/AsideHeader/AsideHeader';
import SectionAbout from '@components/Sections/SectionAbout/SectionAbout';
import SectionAttorneys from '@components/Sections/SectionAttorneys/SectionAttorneys';
import SectionMatters from '@components/Sections/SectionMatters/SectionMatters';
import SectionRequest from '@components/Sections/SectionRequest/SectionRequest';
import SectionReviews from '@components/Sections/SectionReviews/SectionReviews';
import React from 'react';

function HomePage() {
    return (
        <div className='home-page'>
            <AsideHeader />
            <SectionMatters />
            <SectionAbout />
            <SectionReviews />
            <SectionAttorneys />
            <SectionRequest />
        </div>
    );
}

export default HomePage;