import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
    src: string;
    name: string;
    width: number;
    height: number;
    index: number;
};

export const SkillDataProvider = ({
    src,
    name,
    width,
    height,
    index,
}: SkillDataProviderProps) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ display: "inline-block" }}
        >
            <img
                src={`/skills/${src}`}
                width={width}
                height={height}
                alt={name}
                className="transition-transform duration-300 hover:scale-110"
                style={{ display: "block" }}
            />
        </motion.div>
    );
};
