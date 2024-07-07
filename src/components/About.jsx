import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../HOC';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile software engineer specializing in Python, C++, PHP, and JavaScript, with expertise in frameworks like Django, AngularJs, ReactJs, and ASP.NET. I excel in database management, version control with Git, and cloud platforms such as AWS and Heroku, alongside a talent for UX/UI design with Figma. Known for my strong communication and teamwork skills, I consistently deliver high-quality software solutions, utilizing efficient project execution and rigorous testing and debugging practices. I am always open to collaboration and look forward to working on your next project.
      </motion.p>      
    </>
  );
};

export default SectionWrapper(About,"about") 