import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'All lending pool interactions connected through trades in a single app!',
    paragraph: 'No more switching between multiple websites for managing your position in lending protocols.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{padding:'5px'}}>
                    <Image
                      src={require('./../../assets/images/bar-chart.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Instant Leverage
                  </h4>
                  <p className="m-0 text-sm">
                    We allow you to use flash swaps to direcly borrow and supply on margin.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{padding:'5px'}}>
                    <Image
                      src={require('./../../assets/images/activity.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Prevent Liquidations
                  </h4>
                  <p className="m-0 text-sm">
                    You can self-liquidate in a single click if necesseray - no fees or manual withdrawals!
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="overlapping-images-container mb-16" style={{padding:'5px'}}>
                    <div style={{
                      marginLeft: '100px',
                      marginRight: '0px'
                    }}>
                      <Image
                        src={require('./../../assets/images/compound-logo.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64} />
                    </div>
                    <div style={{
                      marginRight: '100px',
                      marginLeft: '-20px'
                    }}>
                      <Image
                        src={require('./../../assets/images/uni-logo.png')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Trade with the Best
                  </h4>
                  <p className="m-0 text-sm">
                    We connect the best exchanges such as Uniswap with the most liquid lenders like Compound.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{padding:'5px'}}>
                    <Image
                      src={require('./../../assets/images/globe.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    No Centralization
                  </h4>
                  <p className="m-0 text-sm">
                    History has shown that centralized entities cannot be trusted - 1Delta is one of the first fully decentralized crypto margin broker.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{padding:'5px'}}>
                    <Image
                      src={require('./../../assets/images/coffee.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Easy to use
                  </h4>
                  <p className="m-0 text-sm">
                    Do you know how to use Uniswap? How about Compound? Then you already know how to use 1Delta!
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{padding:'5px'}}>
                    <Image
                      src={require('./../../assets/images/tool.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tons of features
                  </h4>
                  <p className="m-0 text-sm">
                    Transfer your 1Delta account. Let an asset manager safely trade on your behalf. We give you full flexibility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;