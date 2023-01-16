import { useEffect, useState } from "react";
import styled from "styled-components";
import ViewBox from "./viewbox";

const Header = (props) => {
  const [enable, setEnable] = useState(false);
  const {
    setTime,
    activeTime,
    hours,
    minutes,
    seconds,
    setSeconds,
    setMinutes,
    setHours,
  } = props;

  const handleCountClick = () => {
    if (!enable) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };

  useEffect(() => {
    let interval = null;
    if (activeTime) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      if (seconds === 60) {
        setSeconds(0);
        setMinutes((minutes) => minutes + 1);
      }

      if (minutes === 60) {
        setMinutes(0);
        setHours((hours) => hours + 1);
      }
    }

    setTime(
      ("0" + hours).slice(-2) +
        ":" +
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2)
    );

    return () => clearInterval(interval);
  }, [activeTime, setTime, hours, minutes, seconds]);

  return (
    <HeaderWrapper>
      <Container>
        <Hero>
          seek<Span>Us</Span>
        </Hero>
        <TimerContainer>
          <Timer>{props.time}</Timer>
        </TimerContainer>
        <ClickContainer>
          <Count onClick={(e) => handleCountClick(e)}>{props.count}</Count>
          {enable && <ViewBox status={props.status} TARGET={props.TARGET} />}
        </ClickContainer>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  position: fixed;
  width: 100%;
  z-index: 300;

  font-weight: 400;
  font-size: 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  place-items: center;
  gap: 15rem;
`;

const Hero = styled.div`
  font-weight: 900;
  cursor: pointer;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
`;

const TimerContainer = styled.div`
  position: relative;
`;

const Timer = styled.div`
  position: absolute;
  top: -3.5rem;
  left: -6rem;
`;

const ClickContainer = styled.div`
  position: relative;
`;

const Count = styled.button`
  background-color: black;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  color: white;
  font-size: 3.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
`;

export default Header;
