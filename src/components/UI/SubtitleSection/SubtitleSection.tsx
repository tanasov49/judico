import React from 'react';
import './styles.scss';
interface ISubtitle {
    subtitle: string,
    classSubtitle: string
}
function SubtitleSection({subtitle, classSubtitle}) {
    return (
        <p className={`subtitle-section subtitle-section_${classSubtitle}`}>
            {subtitle}
        </p>
    );
}

export default SubtitleSection;