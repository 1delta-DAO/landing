import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import BoxScene from '../scene/Box';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

function pickHex(color1, color2, weight) {
  var w1 = weight;
  var w2 = 1 - w1;
  var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
  Math.round(color1[1] * w1 + color2[1] * w2),
  Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
}

const basePalette = ['#ff5eb9', '#4c2dfa']

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const location = useLocation();
  console.log(location.pathname);
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );



  const [colors, setColors] = useState(['#ff5eb9', '#4c2dfa'])
  const [color, setColor] = useState('linear-gradient(to right, rgba(4, 14, 52, 0.7) 1%, rgba(29, 66, 148, 0.7), rgba(140, 15, 73, 0.7), rgba(43, 0, 11, 0.7))')
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setColors([pickHex(basePalette[0], basePalette[1], window.pageYOffset / height), 'white'])
        setColor(`linear-gradient(to right, rgba(4, 14, 52, 0.7) 1%, rgba(29, 66, 148, 0.7), rgba(140, 15, 73, 0.7), rgba(43, 0, 11, 0.7) ${Math.max(100 - Math.round(window.pageYOffset * 100 / height / 10), 0)}%)`)
      }
      );
    }
  }, []);
  const [isHome, isDisclaimer] = useMemo(() => {
    return [!location.pathname.includes('disclaimer'), location.pathname.includes('disclaimer')]
  }, [location])
  return (
    <header
      {...props}
      className={classes}
      style={{ background: color }}
    >
      <div className="container" >
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <BoxScene  //materialColor={colors[0]} backgroundColor={colors[1]}
          />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="../" onClick={closeMenu}><div className={isHome ? 'text-color-bright-avg-hover-selected' : 'text-color-bright-avg-hover'}>Home</div></Link>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="../disclaimer" onClick={closeMenu}><div className={isDisclaimer ? 'text-color-bright-avg-hover-selected' : 'text-color-bright-avg-hover'}>Disclaimer</div></Link>
                    </li>
                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="#0" onClick={closeMenu}><div className='text-color-bright-avg-hover'>Whitepaper</div></Link>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="https://www.1delta.io/" className="button button-bright button-wide-mobile button-sm" onClick={closeMenu}>Go to App</Link>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
