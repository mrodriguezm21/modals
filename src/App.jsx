import { useState } from "react";
import { Modal } from "./Components/Modal";
import styled from "styled-components";

function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const changeState = (func) => {
    func((prev) => !prev);
  };

  return (
    <div className="App">
      <ButtonContainer>
        <Button onClick={() => changeState(setModal1)}>Modal 1</Button>
        <Button onClick={() => changeState(setModal2)}>Modal 2</Button>
        <Button onClick={() => changeState(setModal3)}>Modal 3</Button>
        <Button onClick={() => changeState(setModal4)}>Modal 4</Button>
      </ButtonContainer>
      {/* Modal 1 */}
      <Modal
        isOpen={modal1}
        onClose={() => changeState(setModal1)}
        title="Some title"
        includeHeader={true}
        includePadding={true}
        includeOverlay={true}
      >
        <Content>
          <h1>Article title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque!
          </p>
          <Button onClick={() => changeState(setModal1)}>Close</Button>
        </Content>
      </Modal>
      {/* Modal 2 */}
      <Modal
        isOpen={modal2}
        onClose={() => changeState(setModal2)}
        includeHeader={false}
        includePadding={false}
        includeOverlay={true}
      >
        <Content>
          <img src="https://cdn.pixabay.com/photo/2019/10/11/16/56/cat-4542301_960_720.jpg" alt="" />
        </Content>
      </Modal>
      {/* Modal 3 */}
      <Modal
        isOpen={modal3}
        onClose={() => changeState(setModal3)}
        title="Cats"
        includeHeader={true}
        includePadding={true}
        modalPosition="start"
      >
        <Content>
        <h1>Cats</h1>
          <p>
            Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats!
          </p>
          <Button onClick={() => changeState(setModal3)}>Close</Button>
        </Content>
      </Modal>
      {/* Modal 4 */}
      <Modal
        isOpen={modal4}
        onClose={() => changeState(setModal4)}
        title="Cats"
        includeHeader={true}
        includePadding={true}
        includeOverlay={false}
        modalPosition="end"
      >
        <Content>
        <h1>Cats</h1>
          <p>
            Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats! Cats!
          </p>
          <Button onClick={() => changeState(setModal4)}>Close</Button>
        </Content>
      </Modal>
    </div>
  );
}

export default App;

const ButtonContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  display: block;
  font-size: 16px;
  min-width: fit-content;
  height: 50px;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
