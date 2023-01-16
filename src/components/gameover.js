import { useState } from "react";
import styled from "styled-components";

const Gameover = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const submit = (e) => {
    if (e.keyCode === 13) {
      let userData = [...props.userDatabase];
      let newData = {};

      newData.name = userInput;
      newData.time = props.time;

      userData.push(newData);

      props.setUserDatabase(userData);

      props.setIsGameOver(false); 

      enableLeaderboard();
    }
  };

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
          onKeyDown={(e) => submit(e)}
        />
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
  background-color: rgba(0, 0, 0, 0.5);
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

export default Gameover;
export { Wrapper, Container };
