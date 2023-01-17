import { Wrapper } from "./gameover";
import styled from "styled-components";

const Start = (props) => {

    const handleStart = () =>{
        props.setStart(true);

        startTime();
    }
    
    const startTime = () => {
        props.setActiveTime(true);
    }

    return ( 
        <Wrapper>
            <Container>
                <MapPreview></MapPreview>
                <Gameplay>
                    <h1>The Loc Nar</h1>
                    <div>
                        <img src="#" alt="robot" />
                        <div>Robot</div>
                        <div>Easy</div>
                    </div>
                    <div>
                        <img src="#" alt="robot" />
                        <div>Ryu</div>
                        <div>Medium</div>
                    </div>
                    <div>
                        <img src="#" alt="robot" />
                        <div>Patrick</div>
                        <div>Hard</div>
                    </div>
                    <button onClick={() => handleStart()}>START</button>
                </Gameplay>
            </Container>
        </Wrapper>
    );
}

const Container = styled.div`
    position: fixed;
    z-index: 500;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border-radius: 16px;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 2rem;
    width: 50%;
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
    gap: 2rem;
    width: 50%;
    padding: 2rem;
`;
 
export default Start;