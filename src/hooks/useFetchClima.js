import { useEffect, useState } from "react";
import { getCountriess } from "../helpers/getCountries";
import { getWeather } from "../helpers/getWeather";

export const useFetchClima = (url) => {
    const [countries, setCountry] = useState([]);

    const getCountries= async () => {
        const newCountries = await getWeather(url);
        setCountry( newCountries );
      
    }

    useEffect( ()=>{
        getCountries();
        
    }, [ ] )

    console.log(countries);
    return {
        countries
    }

}
