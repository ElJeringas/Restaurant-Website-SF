import React from 'react';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import { useTranslation } from 'react-i18next';

const FindUs = () => {
  const {t} = useTranslation('global')

  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title={t(`contact.subtitle`)}/>
        <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>{t(`contact.title`)}</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>{t(`contact.description_1`)}</p>
          <p className='p__opensans'>{t(`contact.description_2`)}</p>
          <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>{t(`contact.schedule_title`)}</p>
          <p className='p__opensans'>{t(`contact.schedule_1`)}</p>
          <p className='p__opensans'>{t(`contact.schedule_2`)}</p>
        </div>
        <button type='button' className='custom__button' style={{marginTop:'2rem'}}>{t(`contact.button`)}</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt='findus'/>
      </div>
    </div>
  )
}

export default FindUs