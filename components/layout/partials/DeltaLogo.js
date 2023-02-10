import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {



  return (
    <div style={{alignItems:'center', justifyContent:'center', width:'60px'}}
    >
      {/* <a className="m-0"> */}
      {/* <Link to="/"> */}
      <Image
        src={require('./../../../assets/images/logo_dark.svg')}
        alt="Open"
        width={50}
        height={50} />
      {/* </Link> */}
      {/* </a> */}
    </div>
  );
}

export default Logo;