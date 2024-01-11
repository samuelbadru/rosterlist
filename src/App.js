// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from "react";

import RosterCount from "./components/RosterCount/RosterCount";
import { getDevelopers } from "./utils";
import RosterList from "./components/RosterList/RosterList";
import RosterHeader from "./components/RosterHeader/RosterHeader";

function App() {
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
  

  return (
      <div >
        <RosterHeader rosterType={rosterType} handleRosterClick={handleRosterClick} />
        <RosterList roster={roster} setRoster={setRoster} rosterType={rosterType}/>
        <RosterCount roster={roster} rosterType={rosterType} />
      </div>
  );
}

export default App;
