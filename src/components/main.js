import styled from "styled-components";
import Mapper from "./mapper";
import {useWindowWidth} from '@react-hook/window-size';
  

const Main = () => {

    let width = useWindowWidth();

    return ( 
        <MainWrapper>
            <Mapper
                responsive={true}
                parentWidth={width}
            />
        </MainWrapper>
     );
}

const MainWrapper = styled.main`
    position: relative;
    top: 65px;
    left: 0;
`;

 
export default Main;