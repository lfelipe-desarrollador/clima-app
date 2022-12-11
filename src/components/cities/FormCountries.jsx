import { useState, useEffect } from "react"
import { getCountriess } from "../../helpers/getCountries"
import { useFetch } from "../../hooks/useFetch"
import { ClimaCity } from "../clima/ClimaCity"
import { SelectItem } from "./SelectItem"

export const FormCountries = () => {

    
    const [state, setState] = useState("");
    const [dpto, setDpto] = useState("");
    const [city, setCity] = useState("");


    const handlerValueState = (value) => {
        setState(value)
    }

    const handlerValueDpto = (value) => {
        setDpto(value)
    }

    const handlerValueStateCity = (value) => {
        setCity(value)
    }


  return (
    <>
    <h2>Selecciona </h2>

    <SelectItem nombre={"País"} url={'https://www.universal-tutorial.com/api/countries/'} api_mode={1} onValueChange={handlerValueState}/>

    {
        state && <SelectItem nombre={"Estado"} url={`https://www.universal-tutorial.com/api/states/${state}`} api_mode={2} onValueChange={handlerValueDpto} />
    }
    
    {
        dpto && <SelectItem nombre={"Ciudad"} url={`https://www.universal-tutorial.com/api/states/${state}`} api_mode={2} onValueChange={handlerValueStateCity} />
    }

    {
        city && <ClimaCity />
    }
    </>
  )
}
