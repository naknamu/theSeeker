import {Wrapper, Container} from './gameover';
import Table from './table';

const Leaderboard = (props) => {
    
    return ( 
        <Wrapper>
            <Container>
                <h1>Global Leaderboard</h1>
                <Table userDatabase={props.userDatabase} />
            </Container>
        </Wrapper>
     );
}
 
export default Leaderboard;