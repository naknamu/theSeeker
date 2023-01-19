import styled from "styled-components";
import ghost_rider from "../assets/images/ghost_rider.png";
import ryuk from "../assets/images/ryuk.png";
import ash from "../assets/images/ash.png";

const Start = (props) => {
  const handleStart = () => {
    props.setStart(true);

    startTime();
  };

  const startTime = () => {
    props.setActiveTime(true);
  };

  return (
    <Wrapper>
      <HeroContainer>
        <Hero>
          the<Span>Seeker</Span>
        </Hero>
        <Sidekick>Locate each of the characters in the map.</Sidekick>
      </HeroContainer>
      <Container>
        <MapPreview></MapPreview>
        <Gameplay>
          <Map>A.D. 2.222</Map>
          <Credit>Image by Egor Klyuchnyk</Credit>
          <Easy>Easy</Easy>
          <TargetCell>
            <TargetImage src={ghost_rider} alt="robot" />
            <div>{props.TARGET.first}</div>
          </TargetCell>
          <Medium>Medium</Medium>
          <TargetCell>
            <TargetImage src={ryuk} alt="robot" />
            <div>{props.TARGET.second}</div>
          </TargetCell>
          <Hard>Hard</Hard>
          <TargetCell>
            <TargetImage src={ash} alt="robot" />
            <div>{props.TARGET.third}</div>
          </TargetCell>
          <StartBtn onClick={() => handleStart()}>START</StartBtn>
        </Gameplay>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled.div`
  z-index: 500;
  color: white;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const Hero = styled.div`
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  opacity: 0.8;
`;

const Sidekick = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  color: white;
  font-weight: 400;
`;

const Container = styled.div`
  z-index: 500;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  display: flex;
  gap: 1rem;
  width: 50%;
  border: 2px solid whitesmoke;

  @media all and (max-width: 480px) { 
    gap: 0;
  }
  
`;

const MapPreview = styled.img`
  background-image: url("https://raw.githubusercontent.com/naknamu/wheres-waldo/main/src/assets/images/extended_city.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const Gameplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  padding: 3rem;
`;

const Map = styled.div`
  font-size: 3rem;
  place-self: center;
  font-weight: 700;
  text-align: center;
`;

const Credit = styled.div`
  font-size: 1.5rem;
  place-self: center;
  transform: translateY(-10px);
  text-align: center;
`;

const StartBtn = styled.button`
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: 1px solid ${({theme}) => theme.colors.primary};;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.light};
  font-size: 2.5rem;
  margin-top: 3rem;

  :hover{
    background-color: ${({theme}) => theme.colors.light};
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
  }

  @media all and (max-width: 480px) { 
    font-size: 1.5rem;
    padding: 0.5rem 1.5rem;
  }
`;

const TargetCell = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;

  @media all and (min-width: 480px) and (max-width: 768px) { 
      gap: 3rem;
    }

  @media all and (max-width: 480px) { 
      gap: 2rem;
  }
`;

const TargetImage = styled.img`
  width: 30%;
`;

const Easy = styled.div`
  color: #ffaa1d;
`;

const Medium = styled.div`
  color: black;
`;

const Hard = styled.div`
  color: #1e40af;
`;

export default Start;
