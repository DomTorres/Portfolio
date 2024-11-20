import React from "react";

const Skills = () => {
    const skills = [
      'HTML', 
      'CSS', 
      'Tailwind', 
      'Bootstrap',
      'JavaScript', 
      'React', 
      'Node.js', 
      'Tensorflow',
      'Python', 
      'Java',
      'Spring Boot',
      'SQL',
      'MongoDB',
      'Firebase',
      'Agile'
    ];
  
    return (
        <>
            <h1 className='my-16 font-heading text-black text-8xl tracking-tight'>Skills</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => (
                <div 
                    key={skill} 
                    className='font-heading px-6 py-2 rounded-md text-black text-2xl tracking-tight
                               transition-colors shadow-lg shadow-black/15
                                whitespace-nowrap'
                >
                    {skill}
                </div>
                ))}
            </div>
        </>
    );
  };
  
  export default Skills;