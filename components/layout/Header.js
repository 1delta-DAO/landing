import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { useRouter } from "next/router";
import BoxScene from '../scene/Box';
import { SiteHeader, SiteHeaderInner } from '../Header/styles';
import { NavContainer } from '../Containers';
import { ButtonLightTop } from '../Buttons';
import styled from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';
import { Menu } from 'react-feather';
import { useOutsideAlerter } from '../../utils/outsideAlerter';


const HeaderText = styled.div`
font-size: ${({ isSelected }) => isSelected ? '20px' : '16px'};
${({ isSelected }) => isSelected ? `margin-bottom: 3px;
font-weight: bold;` : ''}
   @media (max-width: 450px) {
    display: flex;
    align-items: center;;
    justify-content: center;
  }
	&:hover {
    font-size: 20px;
}

`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  @media (max-width: 450px) {
    width: 400px;
    justify-content: center;
  }
`

const HeaderTextCenter = styled.div`
color: black;
text-align: center;
font-size: 20px;
-moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  `



const HeaderTextStan = styled.div`
  color: color(bright-avg);
  font-size: 20px;
	-moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
	&:hover {
        color: color(bright-primary);
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

  const windowSize = useWindowSize()

  const isMobile = windowSize.width < 450

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

  const [isHome, isDisclaimer] = useMemo(() => {
    return [location.includes('home'), location.includes('disclaimer')]
  }, [location])

  const [showMenu, setShowMenu] = useState(false)

  const ref = useRef(null)
  useOutsideAlerter(ref, () => setShowMenu(false))

  return (
    <SiteHeader
      menuActive={!showMenu}
      style={{
        background: 'rgba(255, 255, 255, 0.36)',
        backdropFilter: 'blur(10px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '100%', position: 'relative', justifyContent: 'center' }} >
        <SiteHeaderInner>
          <Link href="/">
            <BoxScene />
          </Link>
          {isMobile ?
            <NavContainer>
              <HeaderTextStan style={{ marginRight: '30px' }}>
                {isHome ? 'Home' : 'Disclaimer'}
              </HeaderTextStan>
            </NavContainer> :
            <HeaderContainer style={{ marginLeft: '30px' }}>
              <HeaderText isSelected={isHome}>
                <Link href="/home" onClick={closeMenu}>
                  Home
                </Link>
              </HeaderText>
              <HeaderText isSelected={isDisclaimer}>
                <Link href="/disclaimer" onClick={closeMenu}>
                  Disclaimer
                </Link>
              </HeaderText>
              <HeaderText isSelected={false}>
                <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Jop2_k7edf7l_ESYV-T-BakzlO_pCGux/view?usp=share_link" onClick={closeMenu}>
                  Whitepaper
                </Link>
              </HeaderText>

              <ButtonLightTop
                style={{ height: '30px' }}
                tag='a'
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.1delta.io/"
                onClick={closeMenu}>
                <Link href={"https://app.1delta.io/"} style={{ color: 'white', fontWeight: 'bold' }}>
                  Go to App
                </Link>
              </ButtonLightTop>

            </HeaderContainer>
          }
          {isMobile && <> <Menu style={{ marginRight: '10px' }} onClick={() => setShowMenu(true)} />
            {showMenu && <div
              ref={ref}
              isActive={showMenu}
              style={{
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'space-between',
                width: '100%',
                position: 'absolute',
                top: '90px',
                height: '120px',
                padding: '0px'
              }}
            >
              {!isHome && <HeaderTextCenter isSelected={isHome}>
                <Link href="/home" onClick={closeMenu}>
                  Home
                </Link>
              </HeaderTextCenter>}
              {!isDisclaimer && <HeaderTextCenter isSelected={isDisclaimer}>
                <Link href="/disclaimer" onClick={closeMenu}>
                  Disclaimer
                </Link>
              </HeaderTextCenter>}
              <HeaderTextCenter isSelected={false}>
                <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Jop2_k7edf7l_ESYV-T-BakzlO_pCGux/view?usp=share_link" onClick={closeMenu}>
                  <div className='text-color-bright-avg-hover'>Whitepaper</div>
                </Link>
              </HeaderTextCenter>

              <div style={{ width: '100%', alignItemes: 'center', justifyContent: 'center', display: 'flex' }}>
                <ButtonLightTop
                  style={{ width: '120px' }}
                  tag='a'
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.1delta.io/"
                  onClick={closeMenu}>
                  <Link href={"https://app.1delta.io/"} style={{ color: 'white', fontWeight: 'bold' }}>
                    Go to App
                  </Link>
                </ButtonLightTop>
              </div>

            </div>
            }
          </>}
        </SiteHeaderInner>
      </div>
    </SiteHeader >
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
