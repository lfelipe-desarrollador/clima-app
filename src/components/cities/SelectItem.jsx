import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export const SelectItem = ({nombre, url, api_mode, onValueChange}) => {

    const { countries } = useFetch(url, api_mode);
       
    const addValue = ({target}) => {
        onValueChange(target.value)
    }

  return (
    <>
        <h4>{nombre}</h4>
        <select name="" id="" onChange={addValue}>

            <option >
            ---
            </option>
            {
                countries &&
                countries.map( pais => (
                    <option key={pais.name} value={pais.name}>{pais.name}</option>
                ))
            }
        </select>
    </>
  )
}
