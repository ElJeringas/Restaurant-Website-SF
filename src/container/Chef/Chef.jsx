import React from 'react'
import {images} from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
import newChefImage from '../../assets/newchef.svg'
import { useTranslation } from 'react-i18next';

import './Chef.css'

const Chef = () => {
  const {t} = useTranslation('global')
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        {/* <img src={images.chef} alt='chef'/> */}
        <img src={newChefImage} alt='chef'/>
      </div>
      <div className='app__wrapper_info'>
         <SubHeading title={t(`chef.subtitle`)}/>
         <h1 className='headtext__cormorant'>{t(`chef.title`)}</h1>
         <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>{t(`chef.description`)}</p>
          </div>
          <p className='p__opensans'>{t(`chef.description_2`)}</p>
         </div>
         <div className='app__chef-sign'>
            <p>Juan Ortega</p>
            <p className='p__opensans'>Chef</p>
            <img src={images.sign} alt='sign'/>
         </div>

      </div>
    </div>
  )
}

export default Chef