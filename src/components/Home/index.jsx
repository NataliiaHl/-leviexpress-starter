import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const handleJourneyChange = (journey) => {
    setJourney(journey)
  }

  const [journey, setJourney] = useState(null)

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey ? <div>Nalezeno spojení s id {journey.journeyId}</div> : null}
    </main>
    
  )
  };
