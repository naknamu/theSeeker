import styled from "styled-components";
import ghost_rider from "../assets/images/ghost_rider.png";
import ryuk from "../assets/images/ryuk.png";
import ash from "../assets/images/ash.png";

const ViewBox = (props) => {
  return (
    <StyledBox>
      <StyledElement disabled={props.status.first}>
        <Easy>Easy</Easy>
        {props.TARGET.first}
        <TargetImage src={ghost_rider} alt={props.TARGET.first} />
      </StyledElement>
      <StyledElement disabled={props.status.second}>
        <Medium>Medium</Medium>
        {props.TARGET.second}
        <TargetImage src={ryuk} alt={props.TARGET.second} />
      </StyledElement>
      <StyledElement disabled={props.status.third}>
        <Hard>Hard</Hard>
        {props.TARGET.third}
        <TargetImage src={ash} alt={props.TARGET.third} />
      </StyledElement>
    </StyledBox>
  );
};

export default ViewBox;

const StyledBox = styled.div`
  width: 25rem;
  position: absolute;
  z-index: 200;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 6px;
  border: 1px solid white;
  font-size: 18px;

  left: -10rem;
  top: 7rem;

  @media all and (max-width: 480px) {
    width: 20rem;
    font-size: 10px;
    left: -12rem;
  }
`;

const StyledElement = styled.div`
  cursor: pointer;
  padding: 1rem;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  font-weight: 700;

  border: 1px dashed ${({ theme }) => theme.colors.primary};

  color: ${(props) =>
    props.disabled ? "darkred" : props.theme.colors.primary};

  text-decoration: ${(props) =>
    props.disabled ? "line-through black double 3px" : "none"};

  background-color: ${(props) =>
    props.disabled ? "gray" : props.theme.colors.light};

  > * {
    opacity: ${(props) => (props.disabled ? "0.1" : "1")};
  }
`;

const TargetImage = styled.img`
  width: 40%;
`;

const Easy = styled.div`
  color: #ffaa1d;
  position: absolute;
  top: 0px;
  left: 15px;

  @media all and (max-width: 480px) {
    left: 1.5rem;
    top: 1rem;
    position: static;
    font-size: 1.5rem;
  }
`;

const Medium = styled.div`
  color: black;
  position: absolute;
  top: 0px;
  left: 15px;

  @media all and (max-width: 480px) {
    left: 1.5rem;
    top: 1rem;
    font-size: 1.5rem;
  }
`;

const Hard = styled.div`
  color: #1e40af;
  position: absolute;
  top: 0px;
  left: 10px;

  @media all and (max-width: 480px) {
    left: 1.5rem;
    top: 1rem;
    font-size: 1.5rem;
  }
`;
