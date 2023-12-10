import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('bg-neutral');
  const [linkColor, setLinkColor] = useState('#1f2937');


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className=' w-full h-20 shadow-xl z-[100] ease-in-out duration-300 text-neutral-content '
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Link className='text-4xl font-bold px-8' href='/'>
          PEMOELA.
        </Link>
        <div>
        <ul className='hidden md:flex px-24 font-bold'>
        <li className='ml-10 text-base uppercase hover:text-blue-500 hover:shadow-md transition duration-300 ease-in-out'>
          <Link href='/'>Home</Link>
        </li>
        <li className='ml-10 text-base uppercase hover:text-blue-500 hover:shadow-md transition duration-300 ease-in-out'>
          <Link href='/blogs'>Blog</Link>
        </li>
        <li className='ml-10 text-base uppercase hover:text-blue-500 hover:shadow-md transition duration-300 ease-in-out'>
          <Link href='/About'>About</Link>
        </li>
        <li className='ml-10 text-2xl uppercase hover:text-blue-500 hover:shadow-md transition duration-300 ease-in-out'>
          <Link href='https://github.com/jlntriw'>
            <FaGithub />
          </Link>
        </li>
      </ul>
          {/* Hamburger Icon */}
          <div

            onClick={handleNav}
            className='md:hidden px-4 font-bold'
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen glass p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' className='text-xl font-bold'>
                MYBLOG.
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
           
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase gap-4 font-semibold text-base'>
              <Link href='/'>
                <li className='mb-4  hover:text-blue-500 hover:shadow-md'>
                  home
                </li>

              </Link>
              <Link href='/blogs'>
                <li className='mb-4  hover:text-blue-500 hover:shadow-md'>Blog</li>
              </Link>
              <Link href='/About'>
                <li className='mb-4 hover:text-blue-500 hover:shadow-md'>About</li>
              </Link>
              <a href='https://github.com/jlntriw' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 hover:shadow-md text-2xl'>
              <FaGithub />
            </a>
            
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;