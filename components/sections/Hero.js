import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import { ButtonDark } from '../elements/Button';
import Modal from '../elements/Modal';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              The <span className="text-color-primary-light">1Delta</span> Protocol
            </div>
            <div className="container-xs" >
              <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                A  <span className="text-color-primary-light" style={{ fontWeight: 'bold' }}>decentralized crypto margin broker</span> connecting the best decentralized exchanges with the most liquid lending protocols.
              </div>
              <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                We have a beta deployment on
                <div style={{ display: 'flex', flexDirection: 'row', width: '120px', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src={require('./../../assets/images/polygon.svg')}
                    alt="Polygon"
                    width={30}
                    height={30}
                  />
                  <span className="text-color-base-intense" style={{fontWeight: 'bold'}} >
                    Polygon
                  </span>
                </div>{' '}
                <div>
                  and testnet deployments on <span className="text-color-base-light">Goerli</span>{' '}
                  and <span className="text-color-base-light">Polygon Mumbai</span>.
                </div>
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <ButtonDark tag='a' target="_blank" wideMobile href="https://app.1delta.io/">
                    Get started
                  </ButtonDark>
                  {/* <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                  </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;