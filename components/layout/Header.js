import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from "next/router";
import BoxScene from '../scene/Box';
import { Hamburger, HamburgerInner, HeaderNavToggle, ScreenReader, SiteHeader, SiteHeaderInner } from '../Header/styles';
import { NavContainer } from '../Containers';
import { ListItem } from '../Text';
import { ButtonLight, ButtonLightTop } from '../Buttons';
import styled from 'styled-components';


const HeaderText = styled.ul`
font-size: ${props => props.isSelected ? '20px' : '16px'};
${props => props.isSelected ? 'margin-bottom: 5px;' : ''}
   @media (max-width: 412px) {
    display: flex;
    align-items: center;;
    justify-content: center;
  }
`

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
 max-width: 100%;
  position: relative;
   justifyContent: center;
   @media (max-width: 412px) {
    width: 400px;
    justify-content: center;
  }
`

const NavContainerInternal = styled.div`
flex-direction: row;
 justify-content: center;
 align-items:center;
 margin-left: 100px;
 @media (max-width: 412px) {
  margin-left: 5px;
}
`

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

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const router = useRouter();
  const location = router.pathname
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

  const openMenu = useCallback(() => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }, [nav]
  )

  const closeMenu = useCallback(() => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }, [nav])

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const [color, setColor] = useState('black')

  const [colorSet, setColorSet] = useState(true)

  useEffect(() => setColorSet(false), [])


  const [isHome, isDisclaimer] = useMemo(() => {
    return [location === '/', location.includes('disclaimer')]
  }, [location])

  return (
    <SiteHeader
      style={{
        background: 'rgba(255, 255, 255, 0.36)',
        backdropFilter: 'blur(10px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '100%', position: 'relative', justifyContent: 'center' }} >
        <SiteHeaderInner>
          <BoxScene height={'70px'} width={'70px'}
          />
          {/* <ContainerTriangles >
            <Triangles />
          </ContainerTriangles> */}
          {!hideNav &&
            <NavContainer>
              <HeaderNavToggle
                ref={hamburger}
                onClick={isActive ? closeMenu : openMenu}
              >
                <ScreenReader>Menu</ScreenReader>
                <Hamburger>
                  <HamburgerInner />
                </Hamburger>
              </HeaderNavToggle>
              {/* <NavContainerInternal
                ref={nav}
                // style={{  flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginLeft: '100px' }}
              > */}
              <HeaderContainer>
                <HeaderText isSelected={isHome}>
                  <Link href="/" onClick={closeMenu}>
                    <div className={isHome ? 'text-color-bright-avg-hover-selected' : 'text-color-bright-avg-hover'}>
                      Home
                    </div>
                  </Link>
                </HeaderText>
                <HeaderText isSelected={isDisclaimer}>
                  <Link href="/disclaimer" onClick={closeMenu}>
                    <div className={isDisclaimer ? 'text-color-bright-avg-hover-selected' : 'text-color-bright-avg-hover'}>
                      Disclaimer
                    </div>
                  </Link>
                </HeaderText>
                <HeaderText isSelected={false}>
                  <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Jop2_k7edf7l_ESYV-T-BakzlO_pCGux/view?usp=share_link" onClick={closeMenu}><div className='text-color-bright-avg-hover'>Whitepaper</div></Link>
                </HeaderText>
                {!hideSignin &&
                  <ul
                    className="list-reset header-nav-right"
                  >
                    <ButtonLightTop
                      tag='a'
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://app.1delta.io/"
                      onClick={closeMenu}>
                      <Link href={"https://app.1delta.io/"} style={{color:'white'}}>
                        Go to App
                      </Link>
                    </ButtonLightTop>
                  </ul>
                }
              </HeaderContainer>
              {/* </NavContainerInternal> */}
            </NavContainer>}
        </SiteHeaderInner>
      </div>
    </SiteHeader >
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
