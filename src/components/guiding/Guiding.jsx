import React from 'react'
import './guiding.scss'
import LKightbulbFilament from "../../assets/lightbulbFilament.png"

const Guiding = () => {
  return (
    <div className='guiding'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-10">
                    <h6><img src={LKightbulbFilament} alt="" /> How we Help</h6>
                    <h2>Guiding You Through Every Step of Your Business Journey</h2>
                    <p>Qatar connects you to the region and the world—seamlessly and strategically.</p>
                </div>
                <div className="col-md-2">
                    <button>Get Support</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guiding