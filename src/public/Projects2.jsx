import React from 'react'
import newsolingologo from '../assets/newsolingologo.png'
import newsolingodemo from '../assets/newsolingodemo.png'
import binarylogo from '../assets/binarylogo.png'
import binarydemo from '../assets/binarydemo.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects2 = () => {
    const newsolingoTechnologies = ["HTML", "CSS", "Javascript", "Bootstrap", "Firestore", "Firebase"];
    const binaryTechnologies = ["HTML", "CSS", "Javascript", "Node.js", "Tensorflow", "Python", "MongoDB", "Cloudinary"];
  
    return (
      <div className='sm:my-32 px-4'>
        <h1 className='font-heading text-black text-4xl sm:text-8xl tracking-tight my-16 text-center sm:text-left'>Projects</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-48'>
          {/* Newsolingo Project */}
          <div className='mb-16'>
            <div className='sm:mx-10 mt-10 shadow-lg shadow-black/15'>
              <img src={newsolingodemo} className='w-full'/>
            </div>
            <div className='mt-16 mb-6 flex flex-col sm:flex-row items-center'>
              <img 
                src={newsolingologo}
                className='w-40 sm:w-60 mb-4 sm:mb-0 sm:mr-4'
              />
              <div className='relative'>
                <a href='https://github.com/DomTorres/Newsolingo' target='_blank'>
                  <FaExternalLinkAlt className='absolute bottom-1/3' />
                </a>
              </div>
            </div>
            <p className='font-heading mb-4 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
              Newsolingo is a web application that gamifies news reading 
              and encourages users to know more about the world.
            </p>
            <p className='font-heading mb-4 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
              Users receive curated world news 
              that they read to fulfill their daily goal. A daily streak encourages users
              to build a news-reading habit. Users may also check out other world news
              through an interative map. 
            </p>
            <p className='font-heading mb-12 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
              The app was built using HTML/CSS, Javascript, Bootstrap, and Google Firebase.
              The project was done in sprints with weekly scrum session between the developers.
            </p>
            <div className='flex justify-center sm:justify-start flex-wrap'>
              {newsolingoTechnologies.map((tech) => (
                <span key={tech} className='shadow-lg shadow-black/15 mr-2 mb-2 px-2 py-1 text-sm font-medium text-black'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
  
          {/* Binary Project */}
          <div className='mb-16'>
            <div className='sm:mx-10 mt-10 shadow-lg shadow-black/15'>
              <img src={binarydemo} className='w-full'/>
            </div>
            <div className='mt-12 mb-2 flex flex-col sm:flex-row items-center'>
              <img 
                src={binarylogo}
                className='w-40 sm:w-48 mb-4 sm:mb-0 sm:mr-4'
              />
              <div className='relative'>
                <a href='https://github.com/clam920/Binary' target='_blank'>
                  <FaExternalLinkAlt className='absolute'/>
                </a>
              </div>
            </div>
            <p className='font-heading mb-4 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
              Binary (pronounced bin-ary) is a full-stack web application 
              that scans and classifies users' waste and tracks waste habits.
            </p>
            <p className='font-heading mb-4 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
                    Users take a picture of their waste, and the app tells which
                    bin it belongs to. Users can also see their waste habits, read info on
                    household waste management, and find the nearest recycling centres nearby.
            </p>
            <p className='font-heading mb-4 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
            A Machine Learning model was trained to classify images of household waste
            using Tensorflow and the Keras ResNet101v2 model.
            </p>
            <p className='font-heading mb-4 text-lg sm:text-2xl text-black tracking-tight text-center sm:text-justify'>
            The app was built using HTML/CSS, Javascript, Node.js, MongoDB, and Cloudinary.
            The developers held a scrum session with a product manager to discuss feature progress and roadblocks.
            </p>
            
            <div className='flex justify-center sm:justify-start flex-wrap'>
              {binaryTechnologies.map((tech) => (
                <span key={tech} className='shadow-lg shadow-black/15 mr-2 mb-2 px-2 py-1 text-sm font-medium text-black'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Projects2;
