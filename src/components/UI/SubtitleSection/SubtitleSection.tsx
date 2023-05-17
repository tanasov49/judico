import React from 'react';
import './styles.scss';
interface ISubtitle {
    subtitle: string,
    classSubtitle: string
}
import { motion } from 'framer-motion';
function SubtitleSection({subtitle, classSubtitle}: ISubtitle) {
    const animateText = {
        hidden: {
            y: -200,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: 1},
        })
    }
    return (
        <motion.p custom={1} variants={animateText} className={`subtitle-section subtitle-section_${classSubtitle}`}>
            {subtitle}
        </motion.p>
    );
}

export default SubtitleSection;