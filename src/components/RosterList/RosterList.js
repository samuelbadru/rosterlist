import AddItem from "./AddItem";
import Item from "./Item";
import "./RosterList.css";

const RosterList = (props) => {
    const sortedRoster = props.roster.sort();

    return(
        <div className="RosterList">
            <AddItem rosterType={props.rosterType} setRoster={props.setRoster}/>
            <ul>
                {sortedRoster.map((item, index) => {return <Item key={index} userID={index} name={item} /> })}
            </ul>
        </div>
    )

}

export default RosterList;