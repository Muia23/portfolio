import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
const [active, setActive] = useState('')
const [toggle, setToggle] = useState(false)


  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-150 px-10" >
      <div className="w-full h-full flex flex-row justify-between items-center m-auto px-[10px]">
        <Link to="/" className="h-auto w-auto flex flex-row items-center" 
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);          
          }}
        >
          <img src={logo} alt="logo" width={50} height={50} className="cursor-pointer hover:animate-slowspin" />
          <p className="text-white text-[20px] ml-4 font-bold cursor-pointer flex">Wilfred &nbsp;
            <span className="sm:block hidden">Muema</span>
          </p>          
        </Link>
        <div className='w-auto h-full hidden md:flex flex-row content-end justify-between md:ml-10'>
          <ul className="list-none flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mt-2 px-[20px] py-[10px] rounded-full gap-20 h-[50px]">
            {navLinks.map((link) => (
              <li key={link.id} className={
                `${ active === link.title ? "text-white":"text-gray-200"} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
          </ul>
        </div>        

        <div className='flex flex-row'></div>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 shadow-lg shadow-[#2A0E61]/50 bg-[#03001499] backdrop-blur absolute top-20 rigth-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={
                  `${ active === link.title ? "text-white":"text-gray-200"} 
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() =>{
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar