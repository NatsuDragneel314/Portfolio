import React from 'react'

const Home = () => {
  return (
    <section className='hero text-white relative' aria-label="Hero section">
      <div className='hero-text'>
        <h1>
          Hello, <span className='accent'>Zeref</span> here.
        </h1>
        <p aria-label="Tagline">Where logic meets creativity.</p>
      </div>
      <div className='scroll-hint' aria-live="polite" aria-atomic="true">
        Scroll to explore ↓
      </div>
    </section>
  )
}

export default Home