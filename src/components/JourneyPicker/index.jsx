import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
    .then((response) => response.json())
    .then((data) => onJourneyChange(data.results));
  }

  const [fromCity, setFromCity] = useState('')
  const handleFromCity = (event) => {
    setFromCity(event.target.value)
  }

  const [toCity , setToCity] = useState('')
  const handleToCity = (event) => {
    setToCity(event.target.value)
  }

  const [date , setDate] = useState('')
  const handleDate = (event) => {
    setDate(event.target.value)
  }

  const [cities, setCities] = useState([])
  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then((response) => response.json())
      .then((data) => setCities(data.results));
  }, []);

  const [dates, setDates] = useState([])
  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
      .then((response) => response.json())
      .then((data) => setDates(data.results));
  }, []);

 const submitDisabled = toCity === "" || fromCity == "" || date == "" || toCity === fromCity
 
  return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form className="journey-picker__form" onSubmit={handleSubmit}>
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={handleFromCity}>
           <CityOptions cities={cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value={toCity} onChange={handleToCity}>
            <CityOptions cities={cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value={date} onChange={handleDate}>
            <DatesOptions dates={dates}/>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
            disabled={submitDisabled}
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src="/map.svg" />
    </div>
  </div>
  )
}

const CityOptions = ({cities}) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => 
        <option key={city.code} value={city.code}>{city.name}</option>
      )}
    </>
  )
}

const DatesOptions = ({dates}) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) =>
        <option key={date.dateBasic} value={date.dateBasic}>{date.dateCs}</option>
      )}
    </>
  )
}
