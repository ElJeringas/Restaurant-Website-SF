import  { useState } from 'react';
import {images} from '../../constants'
import { useTranslation } from 'react-i18next';
import './AboutUs.css'

const AboutUs = () => {
  const {t} = useTranslation('global')
  const [About, setAbout] = useState(false);
  const [history, setHistory] = useState(false);


  const AboutShowMore = () => {
    setAbout(!About);
  };

  const HistoryShowMore = () => {
    setHistory(!history);
  };
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>{t(`about.title_1`)}</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p className='p__opensans'>{t(`about.description_1`)}</p>
          {About && (
            <p className='p__opensans'>{t(`about.description_1_expand`)}</p>
          )}
          <button type='button' className='custom__button' onClick={AboutShowMore}>{t(`about.button`)}</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='about_knife'/>
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>{t(`about.title_2`)}</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p className='p__opensans'>{t(`about.description_2`)}</p>
          {history && (
            <p className='p__opensans'>{t(`about.description_2_expand`)}</p>
          )}
          <button type='button' className='custom__button' onClick={HistoryShowMore}>{t(`about.button`)}</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs