import React from "react";
interface ISection {
    sectionClass: string;
    children: React.ReactNode;
}
import { motion } from "framer-motion";
function Section({ sectionClass, children }: ISection) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            className={sectionClass}
        >
            {children}
        </motion.section>
    );
}

export default Section;
