import React from 'react'

const About = () => {
  const skills = [
    { icon: '/assets/icons/html.svg', name: 'HTML' },
    { icon: '/assets/icons/css.svg', name: 'CSS' },
    { icon: '/assets/icons/javascript.svg', name: 'JavaScript' },
    { icon: '/assets/icons/tailwindcss.svg', name: 'Tailwind CSS' },
    { icon: '/assets/icons/git.svg', name: 'Git' },
    { icon: '/assets/icons/github.svg', name: 'GitHub' },
    { icon: '/assets/icons/mongodb.svg', name: 'MongoDB' }
  ];

  return (
    <section className='about-section text-white'>
      <h1 className='projects-about-title' aria-label="About section">ABOUT</h1>
      
      <article className='about-content'>
        <p className='about--text'>
          My name is Zeref, and I like to build things that actually work. 
          I'm a developer who creates clean, functional, and meaningful digital 
          experiences at the intersection of{' '}
          <span className='about-highlight'>web development</span>,{' '}
          <span className='about-highlight'>machine learning</span>, and{' '}
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
          watching anime or reading some book. My mission is simple: combine thoughtful design, 
          clean code, and genuine problem-solving to create experiences that make 
          people's lives a little easier.
          <br /><br />
          But most importantly, I never stop learning.
        </p>

        <div className='about-dots' aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>

      {/* Skills Carousel */}
      <div className="slider" role="region" aria-label="Technical skills">
        <div className="slide-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="slide" key={`${skill.name}-${index}`}>
              <img 
                src={skill.icon} 
                alt={skill.name} 
                width="100" 
                height="100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About