
import React, { useState } from 'react';

function App() {
  const [pin, setPin] = useState('');
  const [weatherData, setWeatherData] = useState(null)



  async function weatherHandler() {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${pin},in&appid=d6818e00a8ec4cb974652029a99ca3e6`)
   const data = await response.json()
   
 
    const transformedWeather = {
      
       Speed:data.wind.speed,
        Cloud:data.clouds.all,
        MinTemp:data.main.temp_min,
        MaxTemp:data.main.temp_max
      }
      setWeatherData(transformedWeather)
    }
   
   
   return (
    <React.Fragment>
    <input
      type="text"
      placeholder="Enter pin name.."
      value={pin}
      onChange={(e) => setPin(e.target.value)}
    />
        <button onClick={weatherHandler}>Fetch Weather</button>

        {weatherData && (
          <div>
            <h1>Wind Speed:{weatherData.Speed}m/s</h1>
            <h2>Cloudiness:{weatherData.Cloud}</h2>
            <h3>MinTemp:{weatherData.MinTemp}</h3>
            <h4>MaxTemp:{weatherData.MaxTemp}</h4>
          </div>
        )}
    </React.Fragment>
    )

    
   }
   export default App
