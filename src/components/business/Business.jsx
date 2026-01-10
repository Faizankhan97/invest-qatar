import React from 'react'
import './business.scss'
import FlagBannerFold from '../../assets/flagBannerFold.png'
import Icon1 from '../../assets/image3.png'
import Icon2 from '../../assets/image4.png'
import Icon3 from '../../assets/image5.png'
import Icon4 from '../../assets/image11.png'

const Business = () => {
  return (
        <div className="business">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h6><img src={FlagBannerFold} alt="" /> Start Your Business Journey</h6>
            <h2>License your business throught approved entities</h2>
            <p>Qatar connects you to the region and the world—seamlessly and strategically.</p>
          </div>
          <div className="col-md-8">
            <div className='img-wrap'>
              <img src={Icon1} className='img1' alt="" />
              <img src={Icon2} className='img2' alt="" />
              <img src={Icon4} className='img3' alt="" />
              <img src={Icon3} className='img4' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business