import React from 'react'
import './Chef.css'
import {images} from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef'/>
      </div>
      <div className='app__wrapper_info'>
         <SubHeading title={'Chef`s Word'}/>
         <h1 className='headtext__cormorant'>What we believe in</h1>
         <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>Nostrud eiusmod voluptate consequat ea aliqua aliquip eiusmod.</p>
          </div>
          <p className='p__opensans'> Lorem labore sunt excepteur occaecat irure amet nisi sit aliquip deserunt. Non officia Lorem dolor tempor elit fugiat ad laborum. Mollit anim id reprehenderit esse voluptate quis non eiusmod qui sunt mollit.</p>
         </div>
         <div className='app__chef-sign'>
            <p>Kevin Luo</p>
            <p className='p__opensans'>Chef</p>
            <img src={images.sign} alt='sign'/>
         </div>

      </div>
    </div>
  )
}

export default Chef