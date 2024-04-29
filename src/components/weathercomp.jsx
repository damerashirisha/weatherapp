import { useState,useEffect } from 'react'
import React from 'react'
import Datalist from './datalist'

const Weathercomp = ({weatherdata}) => {
 // console.log(weatherdata)
 const[currentdatetime,setCurrentDateTime]=useState(new Date())
 useEffect(()=>{
  const interval=setInterval(()=>{
    setCurrentDateTime(new Date())
  },1000);
  return ()=>clearInterval(interval)
 },[])
  const{
    name:data,
    sys:{country},
    weather:[{description,icon}],
    wind:{speed},
    main:{humidity,temp}


  }=weatherdata
  //flag class
  const flag=`fi fi-${country.toLowerCase()} mx-3 rounded fs-1 `
  const items=[{
    src:'https://classroomclipart.com/image/content7/50871/thumb.gif',
    primary:`${temp.toFixed()}°`,//alt+0176-for degrees symbol
  },
  {
    src:'https://c8.alamy.com/comp/RD1H24/humidity-vector-icon-for-personal-and-commercial-use-RD1H24.jpg',
    primary:`${humidity}%`,
  },
  {
    src:'https://cdn.dribbble.com/users/1405895/screenshots/3552152/nature_icon_windy_animated_blue.gif',
    primary:`${speed.toFixed()}m/s`,
  },
  ]
  return (
   <section className='container border border-primary mt-3 rounded-3' id='g1'>
    <div className="row">  <span className='text-center text-primary my-3 p-3 fw-bold text-white'><span className='text-black'>Today- </span> {currentdatetime.toLocaleString()}</span></div>
    <div className="row">
      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p className='text-primary'>{description}</p>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-auto">
        <span className={flag}></span>
        <span className='fw-bold text-primary'>{data}</span>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
      <Datalist items={items}/>
    </div>
    </div>

   </section>
  )
}

export default  Weathercomp
