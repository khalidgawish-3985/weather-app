function WeatherDetails({ current }) {


  const data = [

    {
      name: "Humidity",
      value: `${current.humidity}%`,
      icon: "💧"
    },

    {
      name: "Wind",
      value: `${current.wind_kph} km/h`,
      icon: "💨"
    },

    {
      name: "Feels Like",
      value: `${current.feelslike_c}°C`,
      icon: "🌡️"
    }

  ];



  return (

    <div

      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4
      mt-8
      w-full
      "

    >


      {
        data.map((item,index)=>(


          <div

            key={index}

            className="
            w-full
            h-32
            bg-white/20
            backdrop-blur-xl
            border
            border-white/30
            rounded-3xl
            flex
            flex-col
            items-center
            justify-center
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            "

          >



            <span

              className="
              text-3xl
              "

            >

              {item.icon}

            </span>



            <p

              className="
              text-sm
              mt-2
              opacity-80
              "

            >

              {item.name}

            </p>




            <p

              className="
              text-lg
              font-bold
              "

            >

              {item.value}

            </p>



          </div>


        ))

      }



    </div>

  );

}


export default WeatherDetails;