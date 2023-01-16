import styled from 'styled-components';
import {Wrapper, Container} from './gameover';
import Table from './table';

const Leaderboard = (props) => {

    const handleButtonClick = () => {
        props.setLeaderboard(false);
        props.setCount(props.TARGET_COUNT);
        props.setActiveTime(true);
        props.setSeconds(0);
        props.setMinutes(0);
        props.setHours(0);
    }
    
    return ( 
        <Wrapper>
            <Container>
                <h1>Global Leaderboard</h1>
                <Table userDatabase={props.userDatabase} />
                <Button onClick={() => handleButtonClick()}>Restart</Button>
            </Container>
        </Wrapper>
     );
}

const Button = styled.button`
    padding: 1rem 2rem;
    font-size: 22px;
    font-weight: 700;
    margin-top: 2rem;
    background-color: ${({theme}) => theme.colors.light};
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 6px;


    :hover{
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.light};
        border: 1px solid ${({theme}) => theme.colors.light};
    }

    :active{
        background-color: ${({theme}) => theme.colors.light};
        color: ${({theme}) => theme.colors.primary};
        border: 1px solid ${({theme}) => theme.colors.primary};
    }
`;
 
export default Leaderboard;