import styled from "styled-components";
import Mapper from "./mapper";
import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import TargetingBox from "./targetingBox";
import Toast from "./toast";

const Main = (props) => {
  let width = useWindowWidth();
  const [enableBox, setEnableBox] = useState(false);
  const [cursorClick, setCursorClick] = useState([{ x: 0, y: 0 }]);
  const [mapClick, setMapClick] = useState("");
  const [enableToast, setEnableToast] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onClickMap = (e) => {
    setEnableBox(true);
    setMapClick(e.title);
  };

  const getCoordinates = (event) => {
    let e = event.target;
    let dim = e.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;

    return [x, y];
  };

  const onClickMain = (e) => {
    let [x, y] = getCoordinates(e);

    let newPointClick = [];

    newPointClick.x = x;
    newPointClick.y = y;

    setCursorClick(newPointClick);
  };

  useEffect(() => {
    if (enableToast) {
      setTimeout(() => {
        setEnableToast(false);
      }, 1500);
    }
  }, [enableToast]);

  return (
    <MainWrapper onClick={(e) => onClickMain(e)}>
      <Mapper
        responsive={true}
        parentWidth={width}
        onClickMap={(e) => onClickMap(e)}
      />
      {enableBox && (
        <TargetingBox
          point={cursorClick}
          setEnableBox={setEnableBox}
          mapClick={mapClick}
          status={props.status}
          setStatus={props.setStatus}
          TARGET={props.TARGET}
          windowWidth={width}
          count={props.count}
          setCount={props.setCount}
          setEnableToast={setEnableToast}
          setIsCorrect={setIsCorrect}
        />
      )}
      {enableToast && <Toast mapClick={mapClick} isCorrect={isCorrect} />}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  position: relative;
  top: 65px;
  left: 0;
`;

export default Main;
