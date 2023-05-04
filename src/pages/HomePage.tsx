import AsideHeader from '@components/Asides/AsideHeader/AsideHeader';
import SectionAbout from '@components/Sections/SectionAbout/SectionAbout';
import SectionMatters from '@components/Sections/SectionMatters/SectionMatters';
import React from 'react';

function HomePage() {
    return (
        <div className='home-page'>
            <AsideHeader />
            <SectionMatters />
            <SectionAbout />
        </div>
    );
}

export default HomePage;