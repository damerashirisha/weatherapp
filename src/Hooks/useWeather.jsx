//importing the required hooks
import {useState,useEffect} from 'react'
import axios from 'axios'

//creating the custom hook for feteching the weather api data
 export default function useWeather({data}){
    const [weatherloading,setWeatherLoading]=useState(true)
    const [weathererror,setWeathererror]=useState(null)
    const [weatherdata,setWeatherdata]=useState(null)

    //api informmation we need two comp
    const apikey='e8998fd6f36c8b5b791b17ae4a29a54e'
    const apiUrl='https://api.openweathermap.org/data/2.5/weather'
    useEffect(()=>{//mouting
        
        const fetchdata=async()=>{
            try{
             setWeatherLoading(true) //initial loading at the type of fetching
             setWeathererror(null) //intially no error
             const response = await axios.get(apiUrl,{
                params:{
                    q:data,
                    appid:apikey
                }
             });
             console.log(response)
             setWeatherdata(response.data)//passing the dtata from the result
             //setWeathererror(null)
             //setWeatherLoading(false)
            }
            catch(error){
                //setWeatherLoading(false)
                //passing the error if obtianed
                setWeathererror(error)

            }finally{
                //stoping the error once fectch the data
             setWeatherLoading(false)
            }

        }// useEffect depenadce change ayinappudu call chesthadhi
        //calling the function
        fetchdata()

  return()=>{} //unmounting
    },[data])//updation
 return{weatherloading,weatherdata,weathererror}
}