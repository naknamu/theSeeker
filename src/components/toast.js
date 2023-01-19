import styled from "styled-components";

const Toast = (props) => {
  const handleToastMessage = () => {
    switch (props.isCorrect) {
      case true:
        return `You found ${props.mapClick}!`;
      case false:
        return `Keep seeking!`;
      default:
        console.log("Error!");
        break;
    }
  };

  return (
    <Container>
      <ToastStyled isCorrect={props.isCorrect}>
        {handleToastMessage()}
      </ToastStyled>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 600;
  top: 10rem;
  left: 48vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media all and (max-width: 480px) {
    left: 40%;
  }
`;

const ToastStyled = styled.div`
  background-color: ${(props) => (props.isCorrect ? "lightgreen" : "red")};
  padding: 1rem 2rem;
  border-radius: 12px;
  color: ${(props) =>
    props.isCorrect ? props.theme.colors.primary : props.theme.colors.light};
`;

export default Toast;
