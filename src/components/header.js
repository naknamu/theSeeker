import { useState } from "react";
import styled from "styled-components";
import ViewBox from "./viewbox";

const Header = (props) => {
  const [enable, setEnable] = useState(false);

  const handleClick = (e) => {
    if (!enable) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };

  console.log(Object.keys(props.TARGET).length);

  return (
    <HeaderWrapper>
      <Container>
        <Hero>
          seek<Span>Us</Span>
        </Hero>
        <div>00:00:00</div>
        <ClickContainer>
          <Count onClick={(e) => handleClick(e)}>{props.count}</Count>
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
`;

const Hero = styled.div`
  font-weight: 900;
  cursor: pointer;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
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
