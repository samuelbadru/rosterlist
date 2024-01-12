import { Link } from "react-router-dom";

const Item = (props) =>{    
    return(
        <li><Link to={`/users/${props.userID}`}>{props.name}</Link></li>
    )

}

export default Item;