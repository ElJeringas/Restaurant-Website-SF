import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdLanguage} from 'react-icons/md'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import { useTranslation } from 'react-i18next';

import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [t,i18n] = useTranslation('global');
  const handleChangeLanguage = (lang)=>{
    i18n.changeLanguage(lang)
    setIsOpen(false);
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app-logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>{t(`navbar.home`)}</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>{t(`navbar.about`)}</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>{t(`navbar.menu`)}</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards'>{t(`navbar.awards`)}</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>{t(`navbar.contact`)}</a>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <MdLanguage className='app__language-icon' onClick={toggleDropdown}/>
        {isOpen &&(
          <ul className='language-list'>
            <li onClick={()=>handleChangeLanguage("en")}>English</li>
            <li onClick={()=>handleChangeLanguage("es")}>Spanish</li>
          </ul>
        )}
{/*         <a href='#login' className='p__opensans'>English / Spanish</a>
 */}        <div/>
        <a href='https://api.whatsapp.com/send?phone=593979723405' target="_blank" rel="noopener noreferrer" className='p__opensans'>{t(`navbar.book`)}</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'>
              <a href='#home'>{t(`navbar.home`)}</a>
            </li>
            <li className='p__opensans'>
              <a href='#about'>{t(`navbar.about`)}</a>
            </li>
            <li className='p__opensans'>
              <a href='#menu'>{t(`navbar.menu`)}</a>
            </li>
            <li className='p__opensans'>
            <a href='#awards'>{t(`navbar.awards`)}</a>
            </li>
            <li className='p__opensans'>
            <a href='#contact'>{t(`navbar.contact`)}</a>
            </li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default NavBar