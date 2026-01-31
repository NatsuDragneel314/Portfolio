import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section className='contact-section text-white'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h2 className='contact-title'>
            Let's Build Something
            <span className='contact-underline'></span>
          </h2>
          <p className='contact-subtitle'>
            Got a project in mind? Let's talk about it.
          </p>
        </div>

        <div className='contact-content'>
          <div className='contact-info'>
            <div className='info-item'>
              <div className='info-label'>Email</div>
              <a href='mailto:pktappu123@gmail.com' className='info-value'>
                pktappu123@gmail.com
              </a>
            </div>

            <div className='info-item'>
              <div className='info-label'>Location</div>
              <div className='info-value'>Available Worldwide</div>
            </div>

            <div className='info-item'>
              <div className='info-label'>Response Time</div>
              <div className='info-value'>Within 24 hours</div>
            </div>

            <div className='contact-socials'>
              <a href='https://github.com/NatsuDragneel314' target='_blank' rel='noopener noreferrer' className='social-link'>
                GitHub
              </a>
              <a href='https://www.linkedin.com/in/avaneeth-pkt-58229b28a/' target='_blank' rel='noopener noreferrer' className='social-link'>
                LinkedIn
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='social-link'>
                Twitter
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your Name'
                required
                className='form-input'
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your Email'
                required
                className='form-input'
              />
            </div>

            <div className='form-group'>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell me about your project...'
                required
                rows='5'
                className='form-textarea'
              />
            </div>

            <button 
              type='submit' 
              className='submit-btn'
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;