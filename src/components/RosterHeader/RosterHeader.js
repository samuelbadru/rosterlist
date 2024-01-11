import './RosterHeader.css'

const RosterHeader = (props) => {
    return(
        <div className='rosterHeaderContainer'>
            <h1 >{props.rosterType} Roster</h1>
            <button onClick={props.handleRosterClick}>Toggle Roster</button>
        </div>
        
    );
}

export default RosterHeader;