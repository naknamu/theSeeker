import styled from "styled-components";


const Locate = (props) => {

    const {posX, posY} = props;

    //created offset variable to adjust the center of circle at point click
    const OFFSET = 25;

    return ( 
        <LocateStyled 
            posX={posX}
            posY={posY}
            OFFSET={OFFSET}
        >
        </LocateStyled>
     );
}

const LocateStyled = styled.div`
    top: ${props => (props.posY - props.OFFSET) + 'px'};
    left: ${props => (props.posX - props.OFFSET) + 'px'};
    width: 50px;
    height:50px;
    z-index: 100;
    background-color: red;
    border-radius: 50%;
    border: 3px solid black;
    position: absolute;
`;


export default Locate;