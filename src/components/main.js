import styled from "styled-components";
// import robotCity from  "../assets/images/robot_city.jpg";
// import chaosCity from  "../assets/images/chaos_city.jpg";
import extendedCity from "../assets/images/extended_city.jpg";

const Main = () => {

    const getCoordinates = (event) => {

        let e = event.target;
        let dim = e.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;

        return [x, y];
    }
    
    const handleClick = (event) => {
        //get click coordinates
        let [x , y] = getCoordinates(event);
        
        console.log( [x , y]);
    }

    return ( 
        <MainWrapper>
            <ImageStyled 
                src={extendedCity} 
                alt="robot city img" 
                onClick={(event) => handleClick(event)}
                >
            </ImageStyled>
        </MainWrapper>
     );
}

const MainWrapper = styled.main`

`;

const ImageStyled = styled.img`
    max-width: 100%;
    margin-top: 65px;
`;
 
export default Main;