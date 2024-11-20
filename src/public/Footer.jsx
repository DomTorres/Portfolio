import React from 'react'

export default function Footer() {

  return (
    <div 
      className='relative h-[350px] bg-gradient-to-r from-custom1 via-custom2 to-custom3'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='fixed bottom-5 w-full'>
            <div className='mx-5'>
                <a href='mailto:neildominictorres@gmail.com' className='block font-heading text-2xl text-white tracking-tight text-justify'>Email</a>
                <a href='https://www.linkedin.com/in/neil-dominic-torres/' target='_blank' className='block font-heading text-2xl text-white tracking-tight text-justify'>LinkedIn</a>
                <a href='https://github.com/DomTorres' target='_blank' className='block font-heading mb-10 text-2xl text-white tracking-tight text-justify'>GitHub</a>
                <div className='flex justify-between items-end'>
                    <h1 className='font-heading text-white text-8xl tracking-tight'>Let's get in touch!</h1>
                    <div className='font-heading text-md text-white tracking-tight'>This website was made with React, Tailwind, and FramerMotion.</div>
                </div>
            </div>
        </div>
    </div>

  )
}
