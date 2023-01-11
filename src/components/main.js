import { useState } from "react";
import styled from "styled-components";
import extendedCity from "../assets/images/extended_city.jpg";
import Locate from "./locate";
import Mapper from "./mapper"

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

        setLocation(newLocation);
    }

    // const handleRobot = (event) => {
    //     console.log("Robot is clicked!");
    // }

    return ( 
        <MainWrapper>
            {/* <ImageStyled 
                src={extendedCity} 
                alt="robot city img" 
                // onClick={(event) => handleClick(event)}
                >
            </ImageStyled> */}
            {/* {location} */}
            <Mapper />
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

// const RobotStyled = styled.div`
//     position: absolute;
//     top: 143px;
//     left: 129px;
//     width: 143px;
//     height: 264px;
//     background-color: rgba(0,255,0,0.3);;
// `;
 
export default Main;