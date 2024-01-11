import { useState } from "react";
import "./AddItem.css";

const AddItem = (props) => {

    const [newItem, setNewItem] = useState("");

    const handleItemChange = (event) =>{
        setNewItem(event.target.value);
    }

    const handleAddItemClick = (event) => {
        event.preventDefault();
        if (newItem.trim() !== "") {
            // setStateDevelopers([...prevRoster, "Dave"])
            props.setRoster((prevRoster) => {return [...prevRoster, newItem]})
            setNewItem("");
      }
    }

    return(
        <form className="AddItemForm" onSubmit={handleAddItemClick}>
            <input type="text" value={newItem} onChange={handleItemChange} placeholder={`Enter new ${props.rosterType.slice(0, -1)}`} className="AddItemInput"/>
            <input type="submit" value="Add" className="AddItemSubmit" />
        </form>
        
    )
}

export default AddItem;