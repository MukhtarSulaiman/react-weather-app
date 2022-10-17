
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import getFormatedWeatherData from './services/weatherService';

function App() {

     const getWeather = async () => {
          const data = await getFormatedWeatherData({q:'london', units:'matric'})
          // console.log(data)
     }

     getWeather()

     return (
          <div className='mx-auto my-3 p-5 md:px-20 max-w-3xl h-auto bg-gradient-to-br from-cyan-700 to-blue-700 text-white flex flex-col'>
               <TopButtons />
               <Inputs />
               <TimeAndLocation />
               <WeatherDetails />
               <Forecast title='HOURLY FORECAST' />
               <Forecast title='DAILY FORECAST'/>
          </div>
     )
}

export default App;
