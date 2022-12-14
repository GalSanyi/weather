import axios from 'axios';
const API_KEY = '3f8d1bc458505915366b2396c4451363';
export  const gettingWether = async (location) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    );
    return response.data,
     console.log(response.data);
  };