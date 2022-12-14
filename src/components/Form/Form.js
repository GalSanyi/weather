import { useState, useEffect } from 'react';
import 'react-notifications/lib/notifications.css';
import s from './Form.modules.css';
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
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    return setQuery(data)
  };
  useEffect(() => {}, []);
  const handleChange = e => setLocation(e.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (location.trim() === '') {
      return NotificationManager.error('Please write City');
    }

    gettingWether(query);
    setLocation('');
  };

  return (
    <div >
    <div>

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
    </div>
      <NotificationContainer />
      <div className={s.container}>
        {query && (
          <>
            <h1>
              City: {query.name} {query.sys.country}
            </h1>

            <p>Temp: {query.main.temp.toFixed()}°С</p>
            <p>Humidity: {query.main.humidity}%</p>
            <p>Pressure: {query.main.pressure}</p>
            <p>
              min: {query.main.temp_min.toFixed()} || max:{' '}
              {query.main.temp_max.toFixed()}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
