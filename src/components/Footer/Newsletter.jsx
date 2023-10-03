import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading';
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter"/>
        <h1 className='headtext__cormorant'>Subscrite to us newsletter</h1>
        <p className='p__opensans'>And Never miss latest updates</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your email address'></input>
        <button type='button' className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter