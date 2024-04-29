//importing the required hooks
import {useState,useEffect} from 'react'
import axios from 'axios'


//creating the custom hook for feteching the weather api data
 export default function useForcast({data}){
    const [forcastloading,setForcastLoading]=useState(true)
    const [forcasterror,setForcasterror]=useState(null)
    const [forcastdata,setForcastdata]=useState(null)

    //api informmation we need two comp
    const apikey='bd5e378503939ddaee76f12ad7a97608'
    const apiUrl='https://api.openweathermap.org/data/2.5/forecast/daily?'
    useEffect(()=>{//mouting
        
        const fetchdata=async()=>{
            try{
             setForcastLoading(true) //initial loading at the type of fetching
             setForcasterror(null) //intially no error
             const response = await axios.get(apiUrl,{
                params:{
                    q:data,
                    // ctn:7,
                    appid:apikey,
                    // units:'metric'
                }
             });
             console.log(response)
             setForcastdata(response.data)//passing the dtata from the result
           
            }
            catch(error){
               
                setForcasterror(error)

            }finally{
                //stoping the error once fectch the data
             setForcastLoading(false)
            }

        }
        fetchdata()

  return()=>{} //unmounting
    },[data])//updation
 return{forcastloading,forcastdata,forcasterror}
}