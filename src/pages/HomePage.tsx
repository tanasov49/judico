import AsideHeader from '@components/Asides/AsideHeader/AsideHeader';
import SectionMatters from '@components/Sections/SectionMatters/SectionMatters';
import React from 'react';

function HomePage() {
    return (
        <div className='home-page'>
            <AsideHeader />
            <SectionMatters />
        </div>
    );
}

export default HomePage;