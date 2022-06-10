import React ,{useState} from 'react'
import './App.css'


function App() {
  const apikey ='dc65e11a7b0847be5b72d04a1ffffebe';
  const [weatherdata, setWeatherdata] = useState([{}])
  const[city ,setCity]= useState("")

  const getWeather=(event)=>{
    if(event.key=="Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`).then(
        response=> response.json()

      ).then(
        data => {
          setWeatherdata(data)
          setCity(" ")
        }
      )
    }
  }
  return (
    <div className='container'>
<input
 className='input'
  placeholder='Enter City...'
  onChange={e => setCity(e.target.value)}
  value={city}
  onKeyPress={getWeather}
  />
   {typeof weatherdata.main=== 'undefined' ? (
    <div>
      <p>Welcome to my weather app!Enter city to get the weather info.</p>
    </div>
  ):(
<div>
 <p>{weatherdata.name}</p>
  <p>{Math.round(weatherdata.main.temp)}F</p>
  <p>{weatherdata.weather[0].main}</p>
 </div>
  )}
  </div>
  )
}

export default App  