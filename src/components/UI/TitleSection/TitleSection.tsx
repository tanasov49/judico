import React from 'react';
import './styles.scss';
interface ITitle {
    title: string,
    classTitle: string
}
function TitleSection({title, classTitle}) {
    return (
        <h2 className={`title-section title-section_${classTitle}`}>
            {title}
        </h2>
    );
}

export default TitleSection;