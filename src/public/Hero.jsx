import React from 'react'
import profile from '../assets/profile.png'

const Hero = () => {
  return (
    <div className='sm:mt-28'>
        <h1 className='font-heading text-black text-8xl tracking-tight'>About Me</h1>
        <div className='grid sm:grid-cols-2 gap-24'>
            <div className='flex flex-col justify-center'>
                <div className='font-heading mb-4 text-2xl text-black tracking-tight text-justify'>
                    I'm Dom, 
                    a Computer Systems Technology student at 
                    the British Columbia Institute of Technology
                    with a passion for programming and web development. 
                </div>
                <div className='font-heading mb-4 text-2xl text-black tracking-tight text-justify'>
                    In my free time, I enjoy learning languages, reading, and exploring the outdoors on my bike. 
                    I'm always eager to learn new things.
                </div>
                <div className='font-heading mb-4 text-2xl text-black tracking-tight my-20'>
                    Vancouver, B.C.
                </div>
            </div>
            <div className='flex justify-center align-middle'>
                <div className='shadow-lg shadow-black/15 inline-block'>
                    <a href='https://www.merriam-webster.com/dictionary/handsome' target='_blank'>
                        <img 
                            src={profile}
                            alt="Dom looking handsome"
                            className="max-w-md w-full" // or max-w-sm, max-w-lg, etc.
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
