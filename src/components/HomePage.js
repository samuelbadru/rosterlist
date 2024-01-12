import { useEffect, useState } from "react";
import { getDevelopers } from "../utils";
import RosterCount from "./RosterCount/RosterCount";
import RosterHeader from "./RosterHeader/RosterHeader";
import RosterList from "./RosterList/RosterList";

const HomePage = () =>{
    const [roster, setRoster] = useState(getDevelopers);
    const [rosterType, setRosterType] = useState("Developers")

    useEffect(() => {console.log("Roster:", roster)}, [roster]);
    useEffect(() => {console.log("Roster Type:", rosterType)}, [rosterType]);
    


    const handleRosterClick = () => {
        if (rosterType === "Developers"){
            setRosterType("Engineers")
        }else {
            setRosterType("Developers")
        }
    }
  
  
  
    return(
        <div >
        <RosterHeader rosterType={rosterType} handleRosterClick={handleRosterClick} />
        <RosterList roster={roster} setRoster={setRoster} rosterType={rosterType}/>
        <RosterCount roster={roster} rosterType={rosterType} />
      </div>

    )
}

export default HomePage;