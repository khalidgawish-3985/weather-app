import { useState } from "react";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";
import Error from "./components/Error";

import { getWeather } from "./services/weatherApi";


function App() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  const searchWeather = async (city) => {

    try {

      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);

    } catch (err) {

      console.log(err);

      setWeather(null);
      setError("City not found");

    } finally {

      setLoading(false);

    }

  };




  const getWeatherBackground = () => {

    if (!weather)
      return "clear-bg";


    const condition =
      weather.current.condition.text.toLowerCase();



    if(condition.includes("rain"))
      return "rain-bg";


    if(condition.includes("cloud"))
      return "cloud-bg";


    if(condition.includes("snow"))
      return "snow-bg";


    if(condition.includes("storm"))
      return "storm-bg";


    return "clear-bg";

  };






  return (

    <main

      className={`
      
      weather-bg
      ${getWeatherBackground()}

      min-h-screen

      w-full

      px-3
      sm:px-6

      py-5

      transition-all
      duration-700

      `}

    >



      <h1

        className="
        
        text-2xl
        sm:text-3xl
        md:text-5xl

        font-bold

        text-white

        text-center

        mb-5

        drop-shadow-lg
        
        "

      >

        Weather App 🌤️

      </h1>





      <div

        className="
        
        w-full

        max-w-md

        mx-auto
        
        "

      >

        <Search onSearch={searchWeather}/>

      </div>







      <div className="mt-6">


        {
          loading && <Loading/>
        }



        {
          error && <Error message={error}/>
        }


      </div>







      {

        weather &&

        <section

          className="
          
          w-full

          max-w-md
          sm:max-w-2xl
          lg:max-w-4xl

          mx-auto

          mt-6

          space-y-5

          "

        >



          <WeatherCard weather={weather}/>



          <Forecast
            forecast={weather.forecast}
          />



        </section>

      }




    </main>

  );

}


export default App;