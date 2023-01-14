import styled from "styled-components";

const TargetingBox = (props) => {
    
    const onClickBox = e => {
        if (props.mapClick === e.target.textContent) {

            let newStatus = props.status;

            switch(e.target.textContent) {
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
}
 
export default TargetingBox;

const StyledBox = styled.div`
    width: 10%;
    position: absolute;
    z-index: 200;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 6px;
    border: 2px solid white;

    left: ${props => (props.point.x >= props.windowWidth-230) ? props.windowWidth-230 + 'px' : props.point.x + 'px'};
    top: ${props => props.point.y + 'px'};
`;

const StyledElement = styled.div`
    cursor: pointer;
    padding: 1rem;
    border: 2px solid white;

    color: ${(props) => props.disabled ? "darkred": "white"};
    text-decoration: ${(props) => props.disabled ? "line-through black double 3px": "none"};
    background-color: ${(props) => props.disabled ? "gray": props.theme.colors.blue};
    pointer-events: ${(props) => props.disabled ? "none": "null"} ;
    
    &:hover {
        background: ${({theme}) => theme.colors.blue_2};
        font-weight: bold;
    }

    &:active {
        background: ${({theme}) => theme.colors.primary};
    }
`;