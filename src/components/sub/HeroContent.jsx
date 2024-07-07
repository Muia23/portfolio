import React from 'react';
import { motion } from 'framer-motion';
import { heroSkills } from "../../assets";
import { fadeIn, textVariant } from '../../utils/motion';
import { styles } from '../../styles';

const HeroContent = () => {
  return (
    <div className="w-full flex items-center gap-10 overflow-hidden sm:px-16 px-6 sm:py-16 py-10" >
        <motion.div
            variants={fadeIn("left","", 0.8, 1)}
            className="flex flex-col gap-6  text-6xl font-bold text-white max-w-[800px] mx-auto w-auto h-auto"
        >
            Hi, I'm &nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Wilfred
            </span>
            <span className="text-lg text-gray-400 my-5 max-w-[600px]">
                A dedicated full-stack developer,           
                committed to creating impactful projects            
                that benefit our society.
            </span>
        </motion.div>        
        <motion.div
            variants={fadeIn("right","", 0.8, 1)}
            className="flex flex-col mt-[150px] justify-center items-center mx-auto w-auto h-auto"
        >
             <img 
                src={heroSkills}
                alt="skills"
                className='w-[600px] h-[600px] image-mask-gradient'                
            />
        </motion.div>
    </div>
  )
}

export default  HeroContent
