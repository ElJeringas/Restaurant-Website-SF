import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

const img = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04];



const Gallery = () => {
  const {t} = useTranslation('global')

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title={t(`gallery.subtitle`)}/>
        <h1 className='headtext__cormorant'>{t(`gallery.title`)}</h1>
        <p className='p__opensans' style={{color:'#AAAAA', marginTop:'2rem'}}>{t(`gallery.description`)}</p>
        <button type='button' className='custom__button'>{t(`gallery.button`)}</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {img.map((image,index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={image} alt='image'/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon ' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>

        </div>
      </div>
    </div>
  )
}

export default Gallery