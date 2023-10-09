import React from 'react'
import {images} from '../../constants'
import { useTranslation } from 'react-i18next';
import SubHeading from '../../components/SubHeading/SubHeading';
import newimg from '../../assets/new.svg';
import './Header.css'

const Header = () => {
  const {t} = useTranslation('global')
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title={t(`header.subtitle`)}/>
        <h1 className='app__header-h1'>{t(`header.title`)}</h1>
        <p className='p__opensans' style={{margin:'2rem 0', textTransform:'none'}}>{t(`header.description`)}</p>
        <button type='button' className='custom__button'>{t(`header.button`)}</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={newimg} alt='header'/>
      </div>
    </div>
  )
}

export default Header