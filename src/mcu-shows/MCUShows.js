import './MCUShows.css';

const MCUShows = ({dates, newAvenger, nextAvenger}) => {
    return (
        <div className='MCUShows'>
            <h1 style={{fontFamily:'georgia', textDecoration:'underline' }}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision:{dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier:{dates.falconWinter}</p>
            <p>Loki:{dates.loki}</p>
            <p>Hawkeye:{dates.hawkeye}</p>
            <button onClick={newAvenger}>RANDOM AVENGER</button>
            <button onClick={nextAvenger}>NEXT AVENGER</button>
        </div>
    );
}

export default MCUShows