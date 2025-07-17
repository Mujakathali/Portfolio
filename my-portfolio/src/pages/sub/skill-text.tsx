import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../../../lib/motion";

export const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <motion.div
                variants={slideInFromTop}
                initial="hidden"
                animate="visible"
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
                style={{ background: '', color: '#b49bff', borderRadius: 8 }}
            >


            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                initial="hidden"
                animate="visible"
                className="text-[30px] font-medium mt-[10px] text-center mb-[15px]"
                style={{ color: '#fff', background: '#222', borderRadius: 8, padding: 8 }}
            >
             
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                initial="hidden"
                animate="visible"
                className="cursive text-[20px] mb-10 mt-[10px] text-center"
                style={{ color: '#e0e0e0', background: '#333', borderRadius: 8, padding: 8 }}
            >
               
            </motion.div>
        </div>
    );
};
