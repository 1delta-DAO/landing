import React, { useState } from 'react';
import Link from 'next/link'

const Banner = ({
  ...props
}) => {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div {...props} className="banner">
          <div className="banner-inner text-xxs">
            <div className='banner-container'>
              <Link className="banner-link banner-link-white" href="https://app.1delta.io/" target="_blank" rel="noopener noreferrer">
                Go to the <span style={{ fontWeight: 'bold' }}> 1delta App</span>
              </Link>
              <span className="banner-separator">or</span>
              <Link className="banner-link banner-link-red" href="https://docs.1delta.io/" target="_blank" rel="noopener noreferrer">
                check out our docs</Link></div>
            <button className="banner-close" onClick={() => setBannerOpen(false)}>
              <span className="screen-reader">Close</span>
              <svg viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;