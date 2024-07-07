import { styles } from '../styles';
import { blackhole } from "../assets";
import HeroContent  from './sub/HeroContent';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <video autoPlay muted loop className='rotate-180 absolute top-[-42%] md:top-[-45%] lg:top-[-41%] left-0 z-[-10] w-full h-full opacity-70 object-cover'>
        <source src={blackhole} type="video/webm" /> 
      </video>
      <HeroContent />
    </section>
  )
}

export default Hero