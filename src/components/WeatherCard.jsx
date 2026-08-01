function WeatherCard({ weather }) {

  return (

    <div
      className="
      glass
      fade
      text-white
      rounded-[35px]
      p-10
      max-w-lg
      mx-auto
      shadow-2xl
      "
    >


      <div className="
      text-center
      ">

        <h2
          className="
          text-4xl
          font-bold
          "
        >
          {weather.location.name}
        </h2>


        <p className="
        opacity-80
        mt-2
        ">
          {weather.location.country}
        </p>


      </div>



      <div
        className="
        flex
        justify-center
        items-center
        my-5
        "
      >

        <img
          src={weather.current.condition.icon}
          alt="weather"
          className="
          w-36
          float
          "
        />

      </div>




      <div className="text-center">


        <h1
          className="
          text-8xl
          font-extrabold
          "
        >

          {Math.round(weather.current.temp_c)}°

        </h1>



        <p
          className="
          text-2xl
          mt-3
          font-medium
          "
        >

          {weather.current.condition.text}

        </p>


      </div>





      <div
        className="
        grid
        grid-cols-3
        gap-4
        mt-10
        "
      >


        <div
          className="
          bg-white/15
          backdrop-blur-lg
          rounded-3xl
          p-5
          text-center
          hover:scale-105
          transition
          "
        >

          <span className="text-3xl">
            💧
          </span>


          <p className="mt-2 text-sm">
            Humidity
          </p>


          <b className="text-lg">
            {weather.current.humidity}%
          </b>


        </div>




        <div
          className="
          bg-white/15
          backdrop-blur-lg
          rounded-3xl
          p-5
          text-center
          hover:scale-105
          transition
          "
        >

          <span className="text-3xl">
            💨
          </span>


          <p className="mt-2 text-sm">
            Wind
          </p>


          <b className="text-lg">
            {weather.current.wind_kph} km/h
          </b>


        </div>




        <div
          className="
          bg-white/15
          backdrop-blur-lg
          rounded-3xl
          p-5
          text-center
          hover:scale-105
          transition
          "
        >

          <span className="text-3xl">
            🌡️
          </span>


          <p className="mt-2 text-sm">
            Feels
          </p>


          <b className="text-lg">
            {Math.round(weather.current.feelslike_c)}°
          </b>


        </div>


      </div>


    </div>

  );

}


export default WeatherCard;