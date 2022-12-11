
export const getCountriess = async(url, api_mode) => {
 
    if (api_mode === 1) {
        const resp = await fetch(url, {headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkYWx1ejAyMjFAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiUzdrdEdRZV9wWlZfSE9XWnktSHVteFdhYUhBcjBsSm1Cck1taC13S244VFhXNGFHRjU0VGdyNDdZRjdVV25LYU1WRSJ9LCJleHAiOjE2NzA4MTg2NzV9.9YfwP6z8fGsqT5JZ3uIR3RRRYKOyo9y9g2zKDytnako',
            Accept: 'application/json'
        }})

        const newcountries = await resp.json()  
        const paises = newcountries.map(country => ({
            id: country.country_short_name,
            name: country.country_name
        })) 
        
        return paises
    }else{
        const resp = await fetch(url, {headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkYWx1ejAyMjFAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiUzdrdEdRZV9wWlZfSE9XWnktSHVteFdhYUhBcjBsSm1Cck1taC13S244VFhXNGFHRjU0VGdyNDdZRjdVV25LYU1WRSJ9LCJleHAiOjE2NzA4MTg2NzV9.9YfwP6z8fGsqT5JZ3uIR3RRRYKOyo9y9g2zKDytnako',
            Accept: 'application/json'
        }})

        const newcountries = await resp.json()  
        const paises = newcountries.map(country => ({
            name: country.state_name
        })) 
        
        return paises

    }
}
