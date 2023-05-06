import { createPortal } from 'react-dom';
import styled from 'styled-components';

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Backdrop = () => {
  return (
    <StyleWrapper>
      <div className="backdrop"/>
    </StyleWrapper>
    )
}

const ModalOverlay = ({ children } : Props) => {
  return (
    <StyleWrapper>
      <div className="modal">
        <div className="content">{children}</div>
      </div>
    </StyleWrapper>
  )
}

const portalElement = document.getElementById('overlay') as HTMLElement;

const Modal = ({ children } : Props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal;

const StyleWrapper = styled.div`

.backdrop {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(66, 66, 66, 0.75);
  }

  /* Popup window */
  .modal {
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 20;
  }

  .content {

  }
`