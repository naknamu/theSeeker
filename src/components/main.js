import styled from "styled-components";
import Mapper from "./mapper";
import {useWindowWidth} from '@react-hook/window-size';
import { useState } from "react";
import TargetingBox from './targetingBox';

const Main = () => {

    let width = useWindowWidth();
    const [enableBox, setEnableBox] = useState(false);
    const [cursorClick, setCursorClick] = useState([{x: 0, y: 0}]);
    const [mapClick, setMapClick] = useState("");
    
    const [status, setStatus] = useState({first: false, second: false, third: false});
    const [target, setTarget] = useState({first: 'Robot', second: 'Ryuk', third: 'Patrick'});

    const onClickMap = (e) => {
        // console.log('Enable Box!');
        setEnableBox(true);

        setMapClick(e.title);
    }

    const getCoordinates = (event) => {

        let e = event.target;
        let dim = e.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;

        return [x, y];
    }

    const onClickMain = (e) => {
        //get click coordinates
        let [x , y] = getCoordinates(e);

        let newPointClick = [];

        newPointClick.x = x;
        newPointClick.y = y;

        setCursorClick(newPointClick);
    }


    return ( 
        <MainWrapper onClick={e => onClickMain(e)}>
            <Mapper
                responsive={true}
                parentWidth={width}
                onClickMap={e => onClickMap(e)} 
            />
            {enableBox && 
            <TargetingBox 
                point={cursorClick} 
                setEnableBox={setEnableBox} 
                mapClick={mapClick} 
                status={status}
                setStatus={setStatus}
                target={target}
                windowWidth={width}
            />}
        </MainWrapper>
     );
}

const MainWrapper = styled.main`
    position: relative;
    top: 65px;
    left: 0;
`;

 
export default Main;