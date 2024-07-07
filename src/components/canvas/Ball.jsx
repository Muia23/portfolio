import React from "react";
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BallCanvas = ({ icon, iconWidth, iconHeight, index}) => {
  const {ref, inView} = useInView({
      triggerOnce: true
  })

  const imageVariants = {
      hidden: {opacity: 0},
      visible: {opacity: 1}
  }

  const animationDelay = 0.3

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{delay: index * animationDelay}}
      className="w-[150px] h-[150px]"
      >
        <img
          src={icon}
          width={iconWidth}
          height={iconHeight}
          alt='skill image'
        />
    </motion.div>      
  );
};

export default BallCanvas;