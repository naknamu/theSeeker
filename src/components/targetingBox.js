import styled from "styled-components";

const TargetingBox = (props) => {
    console.log(props.point);
    return ( 
        <StyledBox point={props.point}>
            <StyledElement>
                Robot
            </StyledElement>
            <StyledElement>
                Batman
            </StyledElement>
            <StyledElement>
                Wolverine
            </StyledElement>
        </StyledBox>
     );
}
 
export default TargetingBox;

const StyledBox = styled.div`
    width: 12%;
    background-color: aquamarine;
    position: absolute;
    z-index: 200;
    left: ${props => props.point.x + 'px'};
    top: ${props => props.point.y + 'px'};
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 2px solid burlywood;
`;

const StyledElement = styled.div`
    &:hover {
        background: palevioletred;
    }
    border: 2px solid burlywood;
    cursor: pointer;
`;