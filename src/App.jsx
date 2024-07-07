import { BrowserRouter } from  'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Encryption } from './components';


const App = () => {  
  return (    
      <BrowserRouter>
        <div className='overflow-x-hidden bg-[#030014]'>
          {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div> */}                
          <div className='relative z-50'>
            <Navbar />    
          </div>          
          <div className='relative z-0'>                                  
            <StarsCanvas />
            <div className='flex flex-col gap-20'>
              <Hero />                            
            </div>                        
            <About />
            <Tech />
          </div>          
          <div className='relative z-0'>                                    
            <Encryption />
            <Experience />
          </div>          
          <Works />
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />            
            <StarsCanvas />
          </div>          
        </div>
      </BrowserRouter>        
  )
}

export default App
