import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import * as emailjs from '@emailjs/browser';
import Modal from '../elements/Modal';
import { CheckCircle } from 'react-feather';

const emailKey = process.env.REACT_APP_EMAIL_KEY
const templateKey = process.env.REACT_APP_EMAIL_TEMPLATE_KEY
const publicKey = process.env.REACT_APP_PUBLIC_KEY

function ModalContent() {

  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [contactData, setContactData] = useState({ ...initialFormState });
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("args", emailKey,
      templateKey,
      e.target,
      publicKey,)
    setLoading(true)
    emailjs
      .sendForm(
        emailKey,
        templateKey,
        e.target,
        publicKey,
      )
      .then(
        (result) => {
          setLoading(false)
          console.log(result.text);
          if (result.text.toLowerCase() === 'ok')
            setSuccess(true)
        },
        (error) => {
          setLoading(false)
          console.log(error.text);
          setError(error.text)
        },
      );

    //reset the form after submission
    setContactData({ ...initialFormState });
  };

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="text-color-primary-light" style={{ textAlign: 'center' }}>{!success ? "Let's talk!" : 'Thank you for reaching out!'}</h2>
      {!success && <p style={{ width: '90%', textAlign: 'center' }}>Tell us how we can help you or how we could do business together.</p>
      }

      {!error && !success && !loading && <>
        <form onSubmit={handleSubmit} style={{ width: '90%' }}>
          <div className="form-col">
            <div className='form-row'>
              <label htmlFor="name" style={{ width: '50px' }}>Name:</label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#DEE1FF', width: '70%', borderRadius: '7px', height: '40px' }}
              />
            </div>
            <div className='form-row'>
              <label htmlFor="email" style={{ width: '50px' }}>Email:</label>
              <input
                type="email"
                className="form-input"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#DEE1FF', width: '70%', borderRadius: '7px', height: '40px' }}
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-sm-12">
              <label htmlFor="message">Your message to us:</label>
              <textarea
                className="form-input"
                type="text"
                name="message"
                maxLength="6000"
                rows="7"
                value={contactData.message}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#DEE1FF', borderTopLeftRadius: '7px', borderTopRightRadius: '7px', borderBottomLeftRadius: '7px' }}
              ></textarea>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" className="button-bright" style={{ width: '200px', height: '40px' }}>
              Send!
            </button>
          </div>

        </form>
      </>}
      {loading && <div
        className="container-sm"
        style={{ display: 'flex', direction: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '7px', height: '100px' }}>
        <div>
          <div className="m-0 text-color-transition-avg">
            Sending message
          </div>
          <div className="snippet" data-title="dot-windmill"
            style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <div className="stage"
              style={{ display: 'flex', flexDirection: 'center', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
              <div className="dot-windmill"></div>
            </div>
          </div>
        </div>
      </div>}
      {!error && success && <div className="container-sm"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}
      ><br />
        <CheckCircle color='rgba(108, 255, 204, 1)' size={50} style={{ filter: 'drop-shadow(3px 5px 2px rgba(108, 255, 204, 0.5))' }} />
        <br />
        <div className="m-0 text-color-transition-avg">
          Success!
        </div>
        <br />
        <div className="m-0 text-color-transition-avg" style={{ textAlign: 'center' }}>
          Stay tuned - We will reply as soon as we can.
        </div>
        <br />
      </div>
      }
      {error && <div
        className="container-sm"
        style={{ display: 'flex', direction: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '7px', height: '100px' }}>
        <div className="m-0 text-color-transition-avg" style={{ fontSize: '14px', textAlign:'center' }}>
          Error: {error}
        </div>
      </div>}
    </div>
  );
}


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false)
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  return (
    <>
      <Modal show={showModal} handleClose={() => setShowModal(false)} >

        {ModalContent()}
      </Modal>
      <section
        {...props}
        className={outerClasses}
      >

        <div className="container">
          <div
            className={innerClasses}
          >
            <div className="cta-slogan">
              <h3 className="m-0  text-color-bright" >
                Get in touch
              </h3>
              <p className="m-0  text-color-bright" >
                Want to get in touch for business or other inquiries?
              </p>
              <p className="m-0  text-color-bright" >
                We'd love to hear from you!
              </p>
            </div>
            <div className="cta-action" >
              <button className='button-bright' onClick={() => setShowModal(true)} style={{ width: '200px', height: '40px' }}>
                Contact Us!
              </button>
              {/* <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your email"
              style={{ backgroundColor: '#DEE1FF' }}>
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#8C0F49" />
              </svg>
            </Input> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;