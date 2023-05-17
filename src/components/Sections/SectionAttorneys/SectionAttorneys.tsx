import React from 'react';
import './styles.scss';
import TitleSection from '@components/UI/TitleSection/TitleSection';
import SubtitleSection from '@components/UI/SubtitleSection/SubtitleSection';
import { attorneys } from '@data';
function SectionAttorneys() {
    return (
        <>
            <TitleSection title='Meet Our Attorneys' classTitle='section-attorneys' />
            <SubtitleSection subtitle={`Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics `} classSubtitle='section-attorneys' />
            <ul className="attorneys">
                {attorneys.map((item, key: number) =>
                <li key={key} className='attorneys-item'>
                    <img className='attorneys-item__image' src={item.photo} alt={`photo ${item.name}`} />
                    <h6 className='attorneys-item__position'>{item.position}</h6>
                    <h5 className='attorneys-item__name'>{item.name}</h5>
                    <p className='attorneys-item__subtitle'>{item.subtitle}</p>
                </li>
                )}
            </ul>
        </>
    );
}

export default SectionAttorneys;