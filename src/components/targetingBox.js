import styled from "styled-components";

const TargetingBox = (props) => {
  const onClickBox = (e) => {
    props.setEnableToast(true);

    if (props.mapClick === e.target.textContent) {
      props.setCount(props.count - 1);

      let newStatus = props.status;

      props.setIsCorrect(true);

      switch (e.target.textContent) {
        case props.TARGET.first:
          newStatus.first = true;
          break;
        case props.TARGET.second:
          newStatus.second = true;
          break;
        case props.TARGET.third:
          newStatus.third = true;
          break;
        default:
          console.log("Error!");
      }

      props.setStatus(newStatus);
    } else {
      console.log("Keep seeking!");
      props.setIsCorrect(false);
    }

    //disable targeting box
    props.setEnableBox(false);
  };

  return (
    <StyledBox
      point={props.point}
      onClick={(e) => onClickBox(e)}
      windowWidth={props.windowWidth}
    >
      <StyledElement disabled={props.status.first}>
        {props.TARGET.first}
      </StyledElement>
      <StyledElement disabled={props.status.second}>
        {props.TARGET.second}
      </StyledElement>
      <StyledElement disabled={props.status.third}>
        {props.TARGET.third}
      </StyledElement>
    </StyledBox>
  );
};

export default TargetingBox;

const StyledBox = styled.div`
  width: 10%;
  position: absolute;
  z-index: 200;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  left: ${(props) =>
    props.point.x >= props.windowWidth - 230
      ? props.windowWidth - 230 + "px"
      : props.point.x + "px"};
  top: ${(props) => props.point.y + "px"};

  @media all and (max-width: 480px) {
    width: 20%;
  }
`;

const StyledElement = styled.div`
  cursor: pointer;
  padding: 1rem;

  border: 1px dashed ${({ theme }) => theme.colors.primary};

  color: ${(props) =>
    props.disabled ? "darkred" : props.theme.colors.primary};

  text-decoration: ${(props) =>
    props.disabled ? "line-through black double 3px" : "none"};

  background-color: ${(props) =>
    props.disabled ? "gray" : props.theme.colors.light};

  pointer-events: ${(props) => (props.disabled ? "none" : "null")};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
  }
`;

export { StyledElement };
