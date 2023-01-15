import styled from "styled-components";

const Gameover = (props) => {

  const storeUserDatabse = (e) => {
    let newUser = [...props.userDatabase];
    let newObj = {};

    newObj.name = e.target.value;
    newObj.time = props.time;

    newUser.push(newObj);

    props.setUserDatabase(newUser);
  }

  const submit = (e) => {
    if (e.keyCode === 13){
      enableLeaderboard();
    }
  }

  const enableLeaderboard = () => {
      props.setLeaderboard(true);
      props.setIsGameOver(false);
  }

  return (
    <Wrapper>
        <Container>
            <Header>Congratulations! 🥳</Header>
            <div>You completed in {props.time}</div>
            <Input type="text" name="username" id="username" placeholder="Enter your name" onChange={e => storeUserDatabse(e)} onKeyDown={e => submit(e)} />
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
export {Wrapper, Container};
