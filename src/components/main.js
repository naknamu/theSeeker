import styled from "styled-components";
import robotCity from  "../assets/images/robot_city.jpg"

const Main = () => {
    return ( 
        <MainWrapper>
            <ImageStyled src={robotCity} alt="robot city img">
            </ImageStyled>
        </MainWrapper>
     );
}

const MainWrapper = styled.main`

`;

const ImageStyled = styled.img`
    width: 100%;
    margin-top: 65px;
`;
 
export default Main;