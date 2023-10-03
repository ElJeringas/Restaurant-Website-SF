import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import {images} from '../../constants'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay/>
      <Newsletter/>

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Address</p>
          <p className='p__opensans'>072345678</p>
          <p className='p__opensans'>+5939888888</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='footer logo'/>
          <p className='p__opensans'>Eiusmod aute aliqua nulla tempor aute.</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:'15px'}}/>
          <div className='app__footer-links_icons'>
            <BsInstagram/>
            <BsFacebook/>
            <BsWhatsapp/>
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working hours</h1>
          <p className='p__opensans'>Monday - Friday:</p>
          <p className='p__opensans'>08:00 - 23:00</p>
          <p className='p__opensans'>Saturday - Sunday:</p>
          <p className='p__opensans'>10:00 - 18:00</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>© Copyright Agency and contributors 2023. </p>

      </div>
    </div>
  )
}

export default Footer