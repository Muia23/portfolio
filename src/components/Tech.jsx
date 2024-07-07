import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../HOC';
import { technologies } from "../constants";
import { techBackground } from "../assets";

const Tech = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[120px] py-5 mt-[-10%]' style={{ transform: "scale(0.9)" }}>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {technologies.map((technology, index) => (
            <div key={technology.name}>
              <BallCanvas icon={technology.icon} iconWidth={technology.width}  iconHeight={technology.height} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-[-10] mt-[-5%]">
        <div className="w-full h-full opacity-25 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src={techBackground}
          />
        </div>
      </div>            
    </>
  );
};

export default SectionWrapper(Tech, "");