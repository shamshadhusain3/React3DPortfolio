import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import {styles,} from '../styles';
import {navLinks} from '../constants';
import {logo,menu,close} from '../assets'; 
const Navbar = () => {

  const [active
    , setactive

  ] = useState();

  const [toggle, settoggle] = useState(false);
  return (
    <nav 
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
        to='/'
        className='flex items-center gap-2'
        onClick={()=>{
          setactive
          ('');
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px]font-bold cursor-pointer">Shamshad <span>Husain </span></p>

        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li
            key={link.id}
            className={`${active=== link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} 
            onClick={()=>setactive(link.title)}
             >
              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ))}

        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close: menu} alt="menu" className="cursor-pointer w-[28px] h-[w-28px] origin-center" 
          onClick={()=>settoggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex  flex-col gap-4 justify-end items-start">
          {navLinks.map((link)=>(
            <li
            key={link.id}
            className={`${active=== link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} 
            onClick={()=>{
              settoggle(!toggle)
              setactive(link.title)}}
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