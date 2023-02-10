import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset" >
        {/* <li>
          <Link to="#0" style={{color:'#C41969'}}>Contact</Link>
        </li>
        <li>
          <Link to="#0" style={{color:'#C41969'}}>About us</Link>
        </li>
        <li>
          <Link to="#0" style={{color:'#C41969'}}>FAQ's</Link>
        </li>
        <li>
          <Link to="#0" style={{color:'#C41969'}}>Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;