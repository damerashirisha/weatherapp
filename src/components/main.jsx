import React from 'react'
import useWeather from '../Hooks/useWeather'
import Weathercomp from './weathercomp'
import useForcast from '../Hooks/useForcast'
import Forcastlist from './forcastlist'

const Main = ({data}) => {
  //passing the city value to custom data to fecth the data
  const{weatherloading,weathererror,weatherdata}=useWeather({data})
  const {forcastloading,forcasterror,forcastdata}=useForcast({data})
  console.log(forcastdata)
  if(!data){
    return(
      <section style={{height:'70vh'}} className='container text-center py-3'>
        <p className='text-primary fw-bold text-capitalize bg-warning p-3 w-50 max-auto'>plz enter the cityname</p>

      </section>
    )
  }
  if(weatherloading && forcastloading){
    return(
      <section style={{height:'70vh'}} className='container text-center py-3'>
        <p className='text-primary fw-bold text-capitalize bg-secondary p-3 w-50 max-auto'>loading...</p>

      </section>
    )
  }
  if(weathererror && forcasterror){
    return(
      <section style={{height:'70vh'}} className='container text-center py-3'>
        <p className='text-primary fw-bold text-capitalize bg-danger p-3 w-50 max-auto'>city not founded</p>

      </section>
    )
  }
  // if(weatherdata){
  //   return(
  //     <section style={{height:'70vh'}} className='container text-center py-3'>
  //       <p className='text-primary fw-bold text-capitalize bg-secondary p-3 w-50 max-auto'>{data}</p>

  //     </section>
  //   )
  // }
  




  return (
    // <div className='container-fluid' style={{height:'70vh'}} id='g1'>
    // <h1 className='text-center border border-primary'>{data}</h1>
    // </div>
    <div style={{height:'100vh'}}>
    <section >
      {!weatherloading && !weathererror && (
         <Weathercomp weatherdata={weatherdata}/>
        
      )}
       <h1 className='text-center fw-bold my-5'>DAY TO DAY Forecast⛅</h1>
       <section className=' conatiner-fluid  d-flex flex-wrap'>
        {!forcastloading && !forcasterror && (
         <Forcastlist forcastdata={forcastdata}/>
        
      )}
       </section>
       </section>
     
    
    </div>
  )
 
}

export default Main
