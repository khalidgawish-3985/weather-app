function Forecast({ forecast }) {


if(!forecast) return null;

return (

<div className="
mt-10
fade
">
  
<h2 className="
text-white
text-2xl
font-bold
mb-6
">
5 Day Forecast
</h2>

<div className="
grid
grid-cols-2
md:grid-cols-5
gap-5
">
  
{
forecast.forecastday.map((day)=>(

<div

key={day.date}

className="
glass
text-white
rounded-3xl
p-5
text-center
hover:scale-105
transition
"
>

<p className="
font-medium
opacity-80
">

{
new Date(day.date)
.toLocaleDateString(
"en-US",
{
weekday:"short"
}
)
}

</p>

<img

src={day.day.condition.icon}

alt="weather"

className="
w-16
mx-auto
my-3
"
/>

<h3 className="
text-3xl
font-bold
">

{Math.round(day.day.avgtemp_c)}°

</h3>
<p className="
text-sm
opacity-80
mt-2
">

{day.day.condition.text}

</p>
</div>
))

}

</div>
</div>

)

}


export default Forecast;
