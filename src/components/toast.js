import styled from "styled-components";

const Toast = (props) => {
    return ( 
        <Container>
            <ToastStyled>
                You found {props.mapClick}!
            </ToastStyled>
        </Container>

    );
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 600;
    top: 10rem;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const ToastStyled = styled.div`
    background-color: lightgreen;
    padding: 1rem 2rem;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.primary};
`;

 
export default Toast;