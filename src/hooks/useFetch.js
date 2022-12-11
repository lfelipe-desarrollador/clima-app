import { useEffect, useState } from "react";
import { getCountriess } from "../helpers/getCountries";

export const useFetch = (url, api_mode) => {
    const [countries, setCountry] = useState([]);

    const getCountries= async () => {
        const newCountries = await getCountriess(url, api_mode);
        setCountry( newCountries );
      
    }

    useEffect( ()=>{
        getCountries();
        
    }, [ ] )

    return {
        countries
    }

}
