import { useState } from "react";
import styled from "styled-components";
// import robotCity from  "../assets/images/robot_city.jpg";
// import chaosCity from  "../assets/images/chaos_city.jpg";
import extendedCity from "../assets/images/extended_city.jpg";
import Locate from "./locate";

const Main = () => {

    const [location , setLocation] = useState([]);

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
        
        console.log([x , y]);

        let newLocation = [...location];

        newLocation.push(<Locate key={location.length + 1} posX={x} posY={y} />)

        console.log(newLocation);

        setLocation(newLocation);
    }

    return ( 
        <MainWrapper>
            <ImageStyled 
                src={extendedCity} 
                alt="robot city img" 
                onClick={(event) => handleClick(event)}
                >
            </ImageStyled>
            {location}
        </MainWrapper>
     );
}

const MainWrapper = styled.main`
    position: relative;
    top: 65px;
    left: 0;
`;

const ImageStyled = styled.img`
    max-width: 100%;
`;
 
export default Main;