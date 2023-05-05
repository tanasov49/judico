import AsideHeader from '@components/Asides/AsideHeader/AsideHeader';
import SectionAbout from '@components/Sections/SectionAbout/SectionAbout';
import SectionMatters from '@components/Sections/SectionMatters/SectionMatters';
import SectionReviews from '@components/Sections/SectionReviews/SectionReviews';
import React from 'react';

function HomePage() {
    return (
        <div className='home-page'>
            <AsideHeader />
            <SectionMatters />
            <SectionAbout />
            <SectionReviews />
        </div>
    );
}

export default HomePage;