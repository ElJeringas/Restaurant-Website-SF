import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading';
import { useTranslation } from 'react-i18next';
import './Newsletter.css'

const Newsletter = () => {
  const {t} = useTranslation('global')

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title={t(`newsletter.subtitle`)}/>
        <h1 className='headtext__cormorant'>{t(`newsletter.title`)}</h1>
        <p className='p__opensans'>{t(`newsletter.description`)}</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder={t(`newsletter.placeholder`)}></input>
        <button type='button' className='custom__button'>{t(`newsletter.button`)}</button>
      </div>
    </div>
  )
}

export default Newsletter