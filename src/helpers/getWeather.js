
export const getWeather = async(url) => {
 
    
        const resp = await fetch(url)

        const clima = await resp.json()  
        console.log(clima);
        
        return []
   
}
