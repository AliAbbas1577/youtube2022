import React from 'react'
import "./featured.css"
const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://bookmepk.s3.eu-central-1.amazonaws.com/static/custom/V3/images/Group%209558.png'
            alt='not available' className='featuredImage'/>
            <div className='featuredTitle'>
                <h3>More for Less</h3>
                <span className='text-muted'>We offer e-tickets with exceptional discounted deals across the country.</span>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://bookmepk.s3.eu-central-1.amazonaws.com/static/custom/V3/images/Group%209560.png'
            alt='not available' className='featuredImage'/>
            <div className='featuredTitle'>
                <h3>We Care</h3>
                <span className='text-muted'>We provide 24/7 effective customer care service.</span>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://bookmepk.s3.eu-central-1.amazonaws.com/static/custom/V3/images/Group%209559.png'
            alt='not available' className='featuredImage'/>
            <div className='featuredTitle'>
                <h3>Lowest Fares</h3>
                <span className='text-muted'>We provide affordable tickets to save up to 50%.</span>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://bookmepk.s3.eu-central-1.amazonaws.com/static/custom/V3/images/Group%209561.png'
            alt='not available' className='featuredImage'/>
            <div className='featuredTitle'>
                <h3>Discover</h3>
                <span className='text-muted'>We make travelling easy across Pakistan by providing easy e-tickets.</span>
            </div>
        </div>
    </div>
  )
}

export default Featured