import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const Parallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div 
        className='w-full h-screen overflow-hidden relative grid place-items-center'
        ref={ref}
    >
      <motion.h1 
        style={{ y: textY }}
        className='font-heading text-white text-9xl tracking-tight absolute top-48 md:text-9xl z-10'>
        Hi! I'm Dom Torres.
      </motion.h1>

      <motion.div 
        className='absolute inset-0 z-0'
        style={{
            y: backgroundY,
            backgroundImage: `url(https://domtorres.github.io/portfolio/vancouver.jpg)`,
            backgroundPosition: 'top',
            backgroundSize: 'cover' 
        }}
      />

      <div 
        className='absolute inset-0 z-20'
        style={{
            backgroundImage: `url(https://domtorres.github.io/portfolio/vancouver-without-bg.png)`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'   
        }}
      />

    </div>
  )
}

export default Parallax
