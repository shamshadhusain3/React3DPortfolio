import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flow-row  `}>
        <div className="flex flex-col items-center mt-5">
         <div className='w-5 h-5 rounded-full bg-[#915eff]' />
         <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Shamshad</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop fullstack projects  with interactive <br className='sm:block hidden' />  user interfaces and web applications.
          </p>
        </div>
      </div>
<ComputersCanvas/>
    </section>
  )
}

export default Hero