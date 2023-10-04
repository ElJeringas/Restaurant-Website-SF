import React from 'react'
import {images} from '../../constants'
import './Header.css'
import SubHeading from '../../components/SubHeading/SubHeading';
import newimg from '../../assets/new.svg';
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Find Dining</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Aliquip eiusmod duis veniam consectetur in anim adipisicing enim ut quis et ullamco non dolor.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={newimg} alt='header'/>
      </div>
    </div>
  )
}

export default Header