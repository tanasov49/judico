import React from 'react';
import './styles.scss';
interface ITitle {
    title: string,
    classTitle: string
}
import { motion } from 'framer-motion';
function TitleSection({title, classTitle}) {
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
        <motion.h2 variants={animateText} custom={1} className={`title-section title-section_${classTitle}`}>
            {title}
        </motion.h2>
    );
}

export default TitleSection;