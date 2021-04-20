import {useState} from 'react'
import {useEffect} from 'react'
import MCUShows from './mcu-shows/MCUShows'

const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  hawkeye: 'Fall of 2021'
}

const avengers = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Hawkeye'
 ];

 
 function App() {
  const [index, setIndex]=useState(0);
  const [num, setNum]=useState(0);
  useEffect(()=>{alert("The Next Avenger has been displayed")}, [num]);
  const newAvenger=()=>{
    setIndex(Math.floor(Math.random()*avengers.length));
  }
  const nextAvenger=()=>{
    if(num===avengers.length-1){
      setNum(0);
    }
    else{
      setNum(num+1);
    }
  }
  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates={releaseDates} newAvenger={newAvenger} nextAvenger={nextAvenger}/>
      <h1>Random Avenger:{avengers[index]}</h1>
      <h1>Next Avenger:{avengers[num]}</h1>
    </div>
  );
}

export default App;
