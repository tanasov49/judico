import React from 'react';
import './styles.scss';
import TitleSection from '@components/UI/TitleSection/TitleSection';
import SubtitleSection from '@components/UI/SubtitleSection/SubtitleSection';
import MapImage from '@images/map.png';
import FormRequest from '@components/UI/FormRequest/FormRequest';
function SectionRequest() {
    return (
        <>
            <div className="section-request-text">
                <TitleSection title={`We Have Branches All\n Over The World`} classTitle='section-request-text' />
                <SubtitleSection subtitle={`The gradual accumulation of information about atomic and \n small-scale behaviour during the first quarter of the 20th\n century, which gave some indications about how small things\n do behave, produced an increasing confusion which was\n Heisenberg, and Born.`} classSubtitle='section-request-text' />
                <img className='section-request-text__image' src={MapImage} alt='map-image' />
            </div>
            <FormRequest classForm='section-request' />
        </>
    );
}

export default SectionRequest;