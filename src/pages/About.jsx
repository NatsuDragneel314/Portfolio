import React from 'react'

const About = () => {
  const skills = [
    '/assets/icons/html.svg',
    '/assets/icons/css.svg',
    '/assets/icons/javascript.svg',
    '/assets/icons/tailwindcss.svg',
    '/assets/icons/git.svg',
    '/assets/icons/github.svg',
    '/assets/icons/mongodb.svg'
  ];

  return (
    <section className='about-section text-white'>
      <h1 className='projects-about-title'>ABOUT</h1>
      
      <div className='about-content'>

      <p className='about--text'>
        My name is Zeref, and I like to build things that actually work. 
        I'm a developer who creates clean, functional, and meaningful digital 
        experiences at the intersection of {' '}
        <span className='about-highlight'>web development</span>, {' '}
        <span className='about-highlight'>machine learning</span>, and {' '}
        <span className='about-highlight'>data-driven problem solving</span>.
      </p>

      <p className='about--text'>
        I focus on creating scalable apps, interactive interfaces, and systems 
        that turn data into insight. I learn by{' '}
        <span className='highlight-cyan'>building</span>,{' '}
        <span className='highlight-blue'>breaking</span>, and{' '}
        <span className='highlight-purple'>refining</span>—constantly iterating 
        to improve both my skills and the projects I work on.
      </p>

      <p className='about--text'>
        I'm based in India, and when I'm not coding, you'll find me 
        Watching Anime or Reading some book. My mission is simple: combine thoughtful design, 
        clean code, and genuine problem-solving to create experiences that make 
        people's lives a little easier.
        <br /><br />
        But most importantly, I never stop learning.
      </p>

      <div className='about-dots'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>

      {/* Infinite Skills Carousel */}
      <div className="slider">
        <div className="slide-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="slide" key={index}>
              <img src={skill} height="100" width="100" alt="skill icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About