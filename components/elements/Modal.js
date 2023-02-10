import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { X } from 'react-feather';

const ModalComponent = styled.div`
position: fixed;
left:40%;
bottom:10%;
border-radius: 20px;
background: white;
height: 550px;
max-width: 400px;
z-index: 1000;
@media (max-width: 768px) {
  width: 95%;
  left:2.5%;
}
`

const ModalBg = styled.div`
height: 100%;
width: 100%;
background: blue;
bottom: 0px;
left: 0px;
position:fixed;
z-index: 1000;
background: rgba(255, 255, 255, .5);
-webkit-backdrop-filter: blur(2em);
backdrop-filter: blur(2em);
`

const Close = styled.button`
background: transparent;
border: 0;
outline: 0;
padding: 0;
cursor: pointer;
position: absolute;
left: 16px;
top: 16px;
width: 16px;
height: 16px;

&::before,
&::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -1px;
  margin-left: -8px;
  width: 16px;
  height: 2px;
  background: color-icon(modal);
}

&::before {
  transform: rotate(225deg);
}

&::after {
  transform: rotate(-45deg);
}

&:hover {

  &::before,
  &::after {
    background: color-icon(modal-hover);
  }
}
`

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video'])
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: '',
  videoTag: 'iframe'
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  video,
  videoTag,
  ...props
}) => {

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopPropagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopPropagation);
    };
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]);

  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className
  );

  return (
    <>
      {show && <ModalBg  />}
      {show &&

        <ModalComponent
          {...props}
          onClick={handleClose}
        >
          <div className="modal-inner" onClick={stopPropagation}>
            {video ?
              <div className="responsive-video">
                {videoTag === 'iframe' ?
                  <iframe
                    title="video"
                    src={video}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe> :
                  <video
                    v-else
                    controls
                    src={video}
                  ></video>
                }
              </div> :
              <>
                {!closeHidden &&
                  <Close
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  >

                    <X />
                  </Close>
                }
                <div style={{marginTop:'20px'}}>
                  {children}
                </div>
              </>
            }
          </div>
        </ModalComponent>


      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;