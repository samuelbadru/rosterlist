import './RosterCount.css';

const RosterCount = (props) => {
    
    return (
    <div className='rosterCountContainer'>
        <p>Number of {props.rosterType}: {props.roster.length}</p>
    </div>
    );
}

export default RosterCount;