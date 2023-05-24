import React from 'react';
import './styles.scss';
interface ISubtitle {
    subtitle: string,
    classSubtitle: string
}
import { motion } from 'framer-motion';
function SubtitleSection({subtitle, classSubtitle}: ISubtitle) {

    return (
        <motion.p initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}} viewport={{ amount: 0.5 }} transition={{ duration: 2 }} className={`subtitle-section subtitle-section_${classSubtitle}`}>
            {subtitle}
        </motion.p>
    );
}

export default SubtitleSection;