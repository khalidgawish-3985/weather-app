function WeatherDetails({current}){


const data=[

{
name:"Feels Like",
value:`${current.feelslike_c}°`,
icon:"🌡️"
},

{
name:"Humidity",
value:`${current.humidity}%`,
icon:"💧"
},

{
name:"Wind",
value:`${current.wind_kph} km/h`,
icon:"💨"
},

{
name:"Pressure",
value:`${current.pressure_mb}`,
icon:"📈"
}

]



return(

<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mt-8
">


{
data.map((item)=>(


<div
key={item.name}
className="
bg-white/20
rounded-2xl
p-4
backdrop-blur
hover:scale-105
transition
"
>

<p className="text-3xl">

{item.icon}

</p>


<p>

{item.name}

</p>


<h3 className="font-bold text-xl">

{item.value}

</h3>


</div>


))
}


</div>

)


}


export default WeatherDetails;