import React from 'react'
import './investor.scss'
import Handshake from '../../assets/handshake.png'
import InvestorImg from '../../assets/image6.png'

const Investor = () => {
  return (
    <div className='investor'>
        <div className="container-fluid p-0">
            <div className="bg-wrap">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center">
                        <h6><img src={Handshake} alt="" /> Join with US</h6>
                        <h2>Join the network of investor in Qatar</h2>
                        <p>Qatar connects you to the region and the world—seamlessly and strategically.</p>
                        <div className='action-button'>
                            <button className='button1'>Join Now</button>
                            <button className='button2'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="img-wrap">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3">
                        <img src={InvestorImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investor