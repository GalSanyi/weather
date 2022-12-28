import React from 'react'

function Information(query) {
  return (
    <div>
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
    </div>
  )
}

export default Information