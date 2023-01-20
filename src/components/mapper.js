import ImageMapper from "react-img-mapper";
import areas from "../assets/JSON/areas.json";

const Mapper = (props) => {
  const URL =
    "https://raw.githubusercontent.com/naknamu/wheres-waldo/main/src/assets/images/extended_city.jpg";
  const MAP = {
    name: "my-map",
    areas: areas,
  };

  return (
    <ImageMapper
      src={URL}
      map={MAP}
      responsive={props.responsive}
      parentWidth={props.parentWidth}
      onClick={props.onClickMap}
      onTouchEnd={props.onTouchEnd}
    />
  );
};

export default Mapper;
