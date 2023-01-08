import styled from "styled-components";

const Header = () => {
    return ( 
        <HeaderWrapper>
            <Container>
                <h1>LocateUs</h1>
                <h1>00:00:00</h1>
                <h1>0</h1>
            </Container>
        </HeaderWrapper>
     );
}

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.light};

    position: fixed;
    width: 100%;

`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;
 
export default Header;