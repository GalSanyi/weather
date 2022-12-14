import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import axios from 'axios';
const API_KEY = '3f8d1bc458505915366b2396c4451363';
const Form = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const gettingWether = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    return setQuery(response.data);
  };
  const handleChange = e => setLocation(e.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (location.trim() === '') {
      return NotificationManager.error('Please write City');
    }

    gettingWether(query);
    setLocation('');
  };
  const addZero = num => {
    if (num < 10) {
      return `0${num}`;
    }
  };
 
  // const date = new Date(query.sys.sunrise);
  // const hours = addZero(date.getHours());
  // const minutes = addZero(date.getMinutes());

  // const time_date = hours + ':' + minutes ;

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="city"
          value={location}
        />
        <button>add weather</button>
      </form>
      <NotificationContainer />
      <div>
        {query && (
          <>
            <h1>
              City: {query.name} {query.sys.country}
            </h1>

            <p>Temp: {query.main.temp.toFixed()}°С</p>
            <p>Sunrise: {query.sys.sunrise}</p>
            <p>Pressure: {query.main.pressure}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
