import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const handleJourneyChange = (journey) => {
    setJourney(journey)
  }

  const [journey, setJourney] = useState(null)

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey ? <JourneyDetail journey={journey}/>: null}
    </main>
    
  )
  };
