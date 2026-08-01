import { useState } from "react";


function Search({onSearch}){


const [city,setCity] = useState("");



const handleSearch = ()=>{

if(city.trim()){

onSearch(city);

}

};



return(

<div className="
flex
gap-3
max-w-xl
mx-auto
">


<input

value={city}

onChange={(e)=>setCity(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter"){

handleSearch();

}

}}

placeholder="Search city..."

className="
flex-1
rounded-full
px-6
py-4
text-gray-800
bg-white/90
placeholder:text-gray-500
shadow-lg
outline-none
border
border-white/50
focus:bg-white
transition
"

/>



<button

onClick={handleSearch}

className="
px-8
py-4
rounded-full
bg-gray-900/80
text-white
font-semibold
shadow-lg
hover:bg-gray-800
hover:scale-105
transition
"

>

Search

</button>



</div>

)

}


export default Search;