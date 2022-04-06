import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-6 px-32 pb-7'>
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className="font-bold">About</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <hr className='md:hidden' />
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className="font-bold">Community</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>A clone inspired by Airbnb</p>
          <p>Join our community</p>
          <p>Our goals for 2022 and beyond</p>
        </div>
        <hr className='sm:hidden' />
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className="font-bold">Host</h5>
          <p>Join our platform</p>
          <p>Host with us</p>
          <p>Browse other properties</p>
          <p>See potential rental income</p>
          <p>Inquire for more</p>
        </div>
        <hr className='sm:hidden' />
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className="font-bold">Support</h5>
          <p>Help Center</p>
          <p>Safety Information</p>
          <p>Report a neighborhood concern</p>
          <p>Cancelation options</p>
          <p>Our COVID-19 Response</p>
        </div>
      </div>
    
    </div>
  )
}

export default Footer