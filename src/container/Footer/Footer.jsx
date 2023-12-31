import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import {images} from '../../constants'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './Footer.css'

const Footer = () => {
  const {t} = useTranslation('global')

  return (
    <div className='app__footer section__padding'>
      <FooterOverlay/>
      <Newsletter/>

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>{t(`footer.title_1`)}</h1>
          <p className='p__opensans'>{t(`footer.description_1`)}</p>
          <p className='p__opensans'>072345678</p>
          <p className='p__opensans'>+5939888888</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='footer logo'/>
          <p className='p__opensans'>{t(`footer.title_2`)}</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:'15px'}}/>
          <div className='app__footer-links_icons'>
            <a href="https://www.instagram.com/casabolivarhotelmuseo/" target="_blank" rel="noopener noreferrer">
              <BsInstagram/>
            </a>
            <a href="https://www.facebook.com/casabolivarhotelmuseo" target="_blank" rel="noopener noreferrer">
              <BsFacebook/>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=593979723405&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp/>
            </a>
          </div>
          <img src={images.G} alt='footer logo' style={{marginTop:'2rem'}} height={'90px'} width={'60px'}/>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>{t(`footer.title_3`)}</h1>
          <p className='p__opensans'>{t(`footer.description_3`)}</p>
          <p className='p__opensans'>08:00 - 23:00</p>
          <p className='p__opensans'>{t(`footer.description_4`)}</p>
          <p className='p__opensans'>10:00 - 18:00</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>{t(`footer.copyright`)}</p>

      </div>
    </div>
  )
}

export default Footer