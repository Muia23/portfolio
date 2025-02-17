import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../HOC';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt options={{max: 45, scale: 1, speed: 450 }} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full">
          <div className="relative w-full h-[250px]">
            <img src={image} alt={name} width={1000} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
                onClick={() => window.open(source_code_link, "blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-2 p-4">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondarytext-[14px]">{description}</p>
          </div>
          {/* <div className="mt-4 flex flex-wrap gap-2 p-4">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div> */}
        </Tilt>
      </motion.div>

      
    </>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My project</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects provide real-world examples of my skills and experience. Each one includes a brief description, along with links to code repositories and live demos, demonstrating my problem-solving abilities, technological versatility, and project management skills. 
        </motion.p>
      </div>

      <div className="h-full w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* h-full w-full flex mt-10 flex-row gap-10" */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");