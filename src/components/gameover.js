import { useState } from "react";
import styled from "styled-components";
import { PostFirestore } from "./firebase_post";

const Gameover = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    let userData = [...props.userDatabase];
    let newData = {};

    newData.name = userInput;
    newData.time = props.time;

    userData.push(newData);

    props.setUserDatabase(userData);

    props.setIsGameOver(false);

    enableLeaderboard();

    //STORE DATE TO FIRESTORE
    PostFirestore(newData.name, newData.time);
  };

  const handleCancel = () => {
    props.setIsGameOver(false);

    enableLeaderboard();
  }

  const enableLeaderboard = () => {
    props.setLeaderboard(true);
  };

  return (
    <Wrapper>
      <Container>
        <Header>Congratulations! 🥳</Header>
        <div>You completed in {props.time}.</div>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your name"
          onChange={(e) => handleUserInput(e)}
          onKeyDown={(e) => (e.key === "Enter") ? handleSubmit() : null}
          maxLength="12"
        />
        <ButtonWrapper>
          <Button onClick={() => handleSubmit()}>Submit</Button>
          <Button onClick={() => handleCancel()}>Cancel</Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Container = styled.div`
  position: fixed;
  z-index: 500;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 3rem;
  border-radius: 6px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 2rem;
`;

const Header = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.light};
  margin-top: 2rem;
  font-size: 2rem;

  :hover{
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default Gameover;
export { Wrapper, Container };
