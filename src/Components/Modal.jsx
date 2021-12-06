import styled from "styled-components";

const Modal = ({
  children,
  isOpen,
  onClose,
  title = "No title included",
  includeHeader,
  includeOverlay,
  includePadding,
  modalPosition,
}) => {
  return (
    <>
      {isOpen && (
        <Overlay includeOverlay={includeOverlay} modalPosition={modalPosition}>
          <ModalContainer includePadding={includePadding}>
            {includeHeader && (
              <Header>
                <h3>{title}</h3>
              </Header>
            )}
            <CloseButton onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};
export { Modal };

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.includeOverlay ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: ${props => props.modalPosition? props.modalPosition : "center"};
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: ${props => props.includePadding ? '20px' : '0'};
  position: relative;
`;
const Header = styled.div`
  font-size: 1.5rem;
  padding-bottom: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  h3 {
    font-weight: 500;
    font-size: 20px;
    color: #1766dc;
  }
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #1766dc;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
    transition: 0.3s ease all;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
