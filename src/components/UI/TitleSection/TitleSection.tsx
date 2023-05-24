import React from 'react';
import './styles.scss';
interface ITitle {
    title: string,
    classTitle: string
}
import { motion } from 'framer-motion';
function TitleSection({title, classTitle}) {

    return (
        <motion.h2 initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}} viewport={{ amount: 0.5 }} transition={{ duration: 1.5 }} className={`title-section title-section_${classTitle}`}>
            {title}
        </motion.h2>
    );
}

export default TitleSection;