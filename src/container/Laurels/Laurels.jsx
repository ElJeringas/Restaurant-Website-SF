import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading';
import {images, data} from '../../constants';
import { useTranslation } from 'react-i18next';

import './Laurels.css'


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const {t} = useTranslation('global')
  return(
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title={t(`laurels.subtitle`)} />
      <h1 className="headtext__cormorant">{t(`laurels.title`)}</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" style={{opacity:'0.80'}} />
    </div>
  </div>
  )
};

export default Laurels;
