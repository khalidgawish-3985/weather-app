function WeatherCard({ weather }) {

  return (

    <div
      className="
      glass
      fade
      text-white
      rounded-[30px]
      p-5
      sm:p-8
      w-full
      max-w-sm
      sm:max-w-lg
      mx-auto
      shadow-2xl
      "
    >


      <div className="text-center">


        <h2
          className="
          text-3xl
          sm:text-4xl
          font-bold
          "
        >
          {weather.location.name}
        </h2>


        <p
          className="
          opacity-80
          mt-1
          text-sm
          "
        >
          {weather.location.country}
        </p>


      </div>




      <div
        className="
        flex
        justify-center
        my-3
        "
      >

        <img

          src={weather.current.condition.icon}

          alt="weather"

          className="
          w-24
          sm:w-32
          float
          "

        />

      </div>






      <div className="text-center">


        <h1
          className="
          text-6xl
          sm:text-8xl
          font-extrabold
          "
        >

          {Math.round(weather.current.temp_c)}°

        </h1>



        <p
          className="
          text-xl
          sm:text-2xl
          mt-2
          "
        >

          {weather.current.condition.text}

        </p>


      </div>







      <div

        className="
        grid
        grid-cols-3
        gap-3
        mt-6
        "

      >


        <WeatherItem
          icon="💧"
          title="Humidity"
          value={`${weather.current.humidity}%`}
        />


        <WeatherItem
          icon="💨"
          title="Wind"
          value={`${weather.current.wind_kph} km/h`}
        />


        <WeatherItem
          icon="🌡️"
          title="Feels"
          value={`${Math.round(weather.current.feelslike_c)}°`}
        />


      </div>



    </div>

  );

}





function WeatherItem({icon,title,value}){

  return (

    <div

      className="
      bg-white/15
      backdrop-blur-lg
      rounded-2xl
      p-3
      text-center
      hover:scale-105
      transition
      "

    >

      <span className="text-2xl">
        {icon}
      </span>


      <p className="
      mt-1
      text-xs
      "
      >
        {title}
      </p>


      <b className="
      text-sm
      "
      >
        {value}
      </b>


    </div>

  );

}



export default WeatherCard;