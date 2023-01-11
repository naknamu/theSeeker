import ImageMapper from 'react-img-mapper';
import areas from "../assets/JSON/areas.json"

const onClick = (e) => {
    switch (e.title) {
        case "Robot":
            console.log("You found the Robot!");
            break;
        default:
            console.log("Keep Looking!");
    }
}

const Mapper = props => {
    const URL =  "https://raw.githubusercontent.com/naknamu/wheres-waldo/main/src/assets/images/extended_city.jpg";
    const MAP = {
      name: 'my-map',
      areas: areas,
    };
    
    return (
        <ImageMapper 
            src={URL} 
            map={MAP} 
            onClick={e => onClick(e)} 
            stayHighlighted={true} 
            responsive={props.responsive}
            parentWidth={props.parentWidth}
        />
    )
}

export default Mapper;