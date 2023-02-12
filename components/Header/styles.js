import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;

  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    width: 340px;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactWrapper = styled.div`
  cursor: pointer;
  width: ${(props) => (props.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const CustomNavLinkSmall = styled.div`
  font-size: 1rem;
  color: black;
  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Span = styled.span`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const headerHeightMobile = '80px'
export const headerHeightDesktop = null;		// header height (desktop)
export const headerNavPaddingH = '32px';		// horizontal padding between header links (desktop)
export const headerNavPaddingVMobile = '24px';		// vertical padding between header links (mobile)
export const headerHamburgerSize = '24px';		// Hamburger button, width and height
export const headerHamburgerThickness = '2px';		// Hamburger button, stroke width
export const headerHamburgerRadius = null;		// Hamburger button, lines radius cap
export const headerHamburgerDistance = '7px';		// hamburger button, top and bottom lines distance from center

// Don't change line below!
// $bgColor: map-push($bg--color, $header--bg);



export const SiteHeader = styled.header`
	position: fixed !important;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1001 !important;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.31);
`

export const SiteHeaderFlyout = styled.div`
	position: fixed !important;
	top: 0;
	left: 0;
	width: 100%;
  height:0;
	z-index: 1001 !important;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.31);
  margin-top: -90px;
  ${({ isActive }) => isActive && `
  transform: translateY: 90px;
  top:  80px;
  height: 400px

  `}
`

export const SiteHeaderSideContent = styled.div`
	position: fixed !important;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10 !important;
	background: color-bg(header);
  &:nth-child(1) {
			padding-top: ${headerHeightMobile};
		}
	}
`
export const SiteHeaderInner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeightMobile};
     @media (max-width: 415px) {
    width: 100%;
    align-items: space-between;
    padding: 5px;
  }
`

export const HeaderNavToggle = styled.button`
	background: transparent;
	border: 0;
	outline: 0;
	padding: 0;
	cursor: pointer;
`

export const ScreenReader = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0,0,0,0);
white-space: nowrap;
border: 0;`



export const HamburgerInner = styled.div`
	top: 50%;
	margin-top: -(${headerHamburgerThickness} * 0.5);
	transition-duration: 0.22s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

	&:before,
	&:after {
		content: '';
		display: block;
	}

	&:before {
		top: -${headerHamburgerDistance};
		transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
	}

	&:after {
		bottom: -${headerHamburgerDistance};
		transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), width 0.1s 0.25s ease-in;
	}
}`

export const HamburgerInnerNotActive = styled(HamburgerInner)`

.off-nav-is-active & {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

  &:before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }

  &:after {
    width: ${headerHamburgerSize};
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.1s ease-out;
  }
  `


export const Hamburger = styled.span`
  position: relative;
	width: ${headerHamburgerSize};
	height: ${headerHamburgerSize};
  `


// Containers widths
export const containerWidthBoxed = '1440px';		// boxed container width
export const containerWidth = '1080px';		// container width
export const containerWidthSm = '896px';		// container sm width
export const containerWidthXs = '620px';		// container xs width
export const containerPadding__mobile = '16px';		// container, left and right padding (mobile)
export const containerPadding__desktop = '24px';		// container, left and right padding (desktop)

export const container = styled.div`
width: 100%;
margin: 0;
padding-left: ${containerPadding__mobile};
padding-right: ${containerPadding__mobile};
`