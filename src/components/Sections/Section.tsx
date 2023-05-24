import React from "react";
interface ISection {
    sectionClass: string;
    children: React.ReactNode;
}
import { motion } from "framer-motion";
function Section({ sectionClass, children }: ISection) {
    return (
        <motion.section
            className={sectionClass}
        >
            {children}
        </motion.section>
    );
}

export default Section;
