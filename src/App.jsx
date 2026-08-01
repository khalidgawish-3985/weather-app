import { useState } from "react";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Loading from "./components/Loading";
import Error from "./components/Error";

import { getWeather } from "./services/weatherApi";


function App(){


const [weather,setWeather] = useState(null);

const [loading,setLoading] = useState(false);

const [error,setError] = useState("");





const searchWeather = async(city)=>{


try{


setLoading(true);

setError("");



const data = await getWeather(city);


setWeather(data);



}

catch(err){


console.log(err);


setError("City not found");


}


finally{


setLoading(false);


}



};







const getWeatherBackground = ()=>{


if(!weather)

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







return(


<div

className={`
weather-bg
${getWeatherBackground()}
min-h-screen
p-6
`}


>



<h1

className="
text-4xl
font-bold
text-white
text-center
mb-8
"

>

Weather App

</h1>





<div className="mb-8">

<Search onSearch={searchWeather}/>

</div>







{
loading && <Loading/>
}






{
error && <Error message={error}/>
}







{

weather &&

<div className="mt-16">

<WeatherCard weather={weather}/>

</div>


}







{

weather &&

<div className="mt-12">

<Forecast forecast={weather.forecast}/>

</div>


}






</div>


)


}



export default App;