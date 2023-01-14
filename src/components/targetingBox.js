import styled from "styled-components";

const TargetingBox = (props) => {
    
    const onClickBox = e => {

        console.log(props.mapClick);

        console.log(e.target.textContent);

        if (props.mapClick === e.target.textContent) {

            let newStatus = props.status;

            switch(e.target.textContent) {
                case props.target.first:
                    newStatus.first = true;
                    break;
                case props.target.second:
                    newStatus.second = true;
                    break;
                case props.target.third:
                    newStatus.third = true;
                    break;
                default:
                    console.log('Error!');
            }

            props.setStatus(newStatus);

        } else {
            console.log("Try again!");
        }

        //disable targeting box
        props.setEnableBox(false);
    }


    return ( 
        <StyledBox point={props.point} onClick={e => onClickBox(e)} windowWidth={props.windowWidth}>
            <StyledElement disabled={props.status.first}>
                {props.target.first}
            </StyledElement>
            <StyledElement disabled={props.status.second}>
                {props.target.second}
            </StyledElement>
            <StyledElement disabled={props.status.third}>
                {props.target.third}
            </StyledElement>
        </StyledBox>
     );
}
 
export default TargetingBox;

const StyledBox = styled.div`
    width: 10%;
    position: absolute;
    z-index: 200;
    left: ${props => (props.point.x >= props.windowWidth-230) ? props.windowWidth-230 + 'px' : props.point.x + 'px'};
    top: ${props => props.point.y + 'px'};
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 6px;
    border: 2px solid white;
`;

const StyledElement = styled.div`
    cursor: pointer;
    padding: 1rem;
    color: ${(props) => props.disabled ? "darkred": "white"};
    text-decoration: ${(props) => props.disabled ? "line-through black double 3px": "none"};
    
    &:hover {
        background: ${({theme}) => theme.colors.blue_2};
        font-weight: bold;
    }
    border: 2px solid white;

    &:active {
        background: greenyellow;
    }

    background-color: ${(props) => props.disabled ? "gray": props.theme.colors.blue};

    pointer-events: ${(props) => props.disabled ? "none": "null"} ;
`;