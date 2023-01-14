import styled from "styled-components";

const Header = () => {

    const handleClick = (e) => {
        console.log(e);
    }

    return ( 
        <HeaderWrapper>
            <Container>
                <Hero>seek<Span>Us</Span></Hero>
                <div>00:00:00</div>
                <Count onClick={e => handleClick(e)}>0</Count>
            </Container>
        </HeaderWrapper>
     );
}

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.light};

    position: fixed;
    width: 100%;
    z-index: 300;

    font-weight: 400;
    font-size: 4rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    place-items: center;
`;

const Hero = styled.div`
    font-weight: 900;
    cursor: pointer;
`;

const Span = styled.span`
    color: ${({theme}) => theme.colors.blue};;
    font-weight: 700;
`;

const Count = styled.button`
    background-color: black;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    color: white;
    font-size: 3.5rem;
    background-color: ${({theme}) => theme.colors.blue};;
    border: none;
`;
 
export default Header;