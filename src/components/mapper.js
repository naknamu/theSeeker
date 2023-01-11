import ImageMapper from 'react-img-mapper';
import extendedCity from "../assets/images/extended_city.jpg";
import areas from "../assets/JSON/areas.json"

const onClick = (e) => {
    console.log(e);
}


const Mapper = props => {
    const URL =  "https://raw.githubusercontent.com/naknamu/wheres-waldo/main/src/assets/images/robot_city.jpg";
    const MAP = {
      name: 'my-map',
      // GET JSON FROM BELOW URL AS AN EXAMPLE
      areas: areas,
    };
    
    return <ImageMapper src={URL} map={MAP} onClick={e => onClick(e)} />
}

export default Mapper;