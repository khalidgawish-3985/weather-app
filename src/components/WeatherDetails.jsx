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
value:`${current.pressure_mb} mb`,
icon:"📈"
}

];



return(

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
mt-10
w-full
"
>


{
data.map((item)=>(


<div

key={item.name}

className="
bg-white/20
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-5
text-center
text-white
shadow-lg
transition
duration-300
hover:-translate-y-2
hover:bg-white/30
"

>


<p
className="
text-4xl
mb-3
"
>

{item.icon}

</p>



<p
className="
text-sm
sm:text-base
opacity-90
"
>

{item.name}

</p>



<h3
className="
font-bold
text-2xl
mt-2
"
>

{item.value}

</h3>


</div>


))
}


</div>

)

}


export default WeatherDetails;